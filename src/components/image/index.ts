import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Coordinates, FocalPoint, Udi } from '../../types.js'
import { getService } from '../../base/angular/index.js'

interface Media {
  metaData?: {
    MediaPath?: string
  }
}

export enum Mode {
  Default = '',
  Cover = 'cover'
}

@customElement('umbh-image')
export default class extends LitElement {
  @property({ type: String })
  alt?: string

  @property({ type: Object })
  coordinates?: Coordinates

  @property({ type: Object, attribute: 'focal-point' })
  focalPoint?: FocalPoint

  @property({ type: String })
  mode?: Mode

  @property({ type: String })
  // @ts-expect-error
  udi: Udi

  @property({ type: Number })
  height?: number

  @property({ type: Number })
  width?: number

  @state()
  private loading: boolean = false

  @state()
  private media?: Media

  connectedCallback (): void {
    super.connectedCallback()
    this.loadMedia()
      .catch(() => {
        this.loading = false
      })
  }

  updated (props: any): void {
    if (props.get('udi') !== undefined) {
      this.loadMedia()
        .catch(() => {
          this.loading = false
        })
    }
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

  render (): any {
    if ((this.media === undefined || this.media === null) || this.loading) return html`<p>loading...</p>`
    const url = this.getUrl()

    if (this.mode === Mode.Cover) { return html`<div style="background: url(${url}); background-size: cover; width: 100%; aspect-ratio: ${this.width ?? 1}/${this.height ?? 1}; overflow: hidden"></div>` }

    return html`<img src=${url} alt=${this.alt} height=${this.height} width=${this.width}>`
  }
}
