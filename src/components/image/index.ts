import { LitElement, TemplateResult, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Coordinates, FocalPoint, Udi } from '../../types.js'
import { getService } from '../../base/angular/index.js'

interface Media {
  metaData?: {
    MediaPath?: string
  }
}

/**
 * The image display mode.
 */
export enum ImageDisplayMode {
  /** Renders the image in an `img` tag. */
  Default = '',
  /** Renders a `div` with the image as the backgroun. */
  Cover = 'cover'
}

/**
 * An element used to show an Image from the Media Library based on it's UDI.
 *
 * @example
 * Renders an image with the UDI `umb://media/0f3cdbaba7a846c2979e16c113426bae` with a width of 800, a height of 600 and the focal point in the center of the image.
 *
 * ```html
 * <umbh-image udi="umb://media/0f3cdbaba7a846c2979e16c113426bae" width="800" height="600" focalpoint='{"left": 0.5, "top": 0.5}'></umbh-image>
 * ```
 */
@customElement('umbh-image')
export default class ImageElement extends LitElement {
  /** The image alt text.  */
  @property({ type: String })
  alt?: string

  /** If specified the image will be cropped based on the value. */
  @property({ type: Object })
  coordinates?: Coordinates

  /** If specified and the image is cropped the focal point is used to determine the center of the image. */
  @property({ type: Object })
  focalPoint?: FocalPoint

  /** Determines how the image is rendered */
  @property({ type: String })
  mode?: ImageDisplayMode

  /** The UDI of the image to show. */
  @property({ type: String })
  // @ts-expect-error
  udi: Udi

  /** The height of the image element. */
  @property({ type: Number })
  height?: number

  /** The width of the image element. */
  @property({ type: Number })
  width?: number

  @state()
  private loading: boolean = false

  @state()
  private media?: Media

  /** @ignore */
  connectedCallback (): void {
    super.connectedCallback()
    this.loadMedia()
      .catch(() => {
        this.loading = false
      })
  }

  /** @ignore */
  updated (props: Map<PropertyKey, unknown>): void {
    if (props.get('udi') !== undefined) {
      this.loadMedia()
        .catch(() => {
          this.loading = false
        })
    }
  }

  /** @ignore */
  render (): TemplateResult {
    if ((this.media === undefined || this.media === null) || this.loading) return html`<p>loading...</p>`
    const url = this.getUrl()

    if (this.mode === ImageDisplayMode.Cover) { return html`<div style="background: url(${url}); background-size: cover; width: 100%; aspect-ratio: ${this.width ?? 1}/${this.height ?? 1}; overflow: hidden"></div>` }

    return html`<img src=${url} alt=${this.alt} height=${this.height} width=${this.width}>`
  }

  private async loadMedia (): Promise<void> {
    this.loading = true
    this.media = await getService('entityResource').getById(this.udi, 'Media')
    this.loading = false
  }

  private getUrl (): string {
    let sep = '?'
    let url = this.media?.metaData?.MediaPath as string

    if (url === undefined) return ''

    if (this.width !== undefined && this.width !== null) {
      sep = '&'
      url += `?width=${String(this.width)}`
    }

    if (this.height !== undefined && this.height !== null) {
      sep = '&'
      url += `${sep}height=${String(this.height)}`
    }

    if (this.coordinates !== undefined && this.coordinates !== null) {
      url += `${sep}crop=${String(this.coordinates.x1)},${String(this.coordinates.y1)},${String(this.coordinates.x2)},${String(this.coordinates.y2)}&mode=percentage`
    } else if (this.focalPoint !== undefined && this.focalPoint !== null) {
      url += `${sep}center=${String(this.focalPoint.top)},${String(this.focalPoint.left)}&mode=crop`
    } else {
      url += `${sep}mode=crop`
    }

    return url
  }
}
