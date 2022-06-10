import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Coordinates, FocalPoint, Udi } from '../../types';
import { getService } from '../../base/angular';

@customElement('umbh-image')
export default class extends LitElement {
  @property({ type: String })
  alt?: string;

  @property({ type: Object })
  coordinates?: Coordinates;

  @property({ type: Object, attribute: 'focal-point' })
  focalPoint?: FocalPoint;

  // TODO: Change to enum
  @property({ type: String })
  mode?: string;

  @property({ type: String })
  udi: Udi;

  @property({ type: Number })
  height?: number;

  @property({ type: Number })
  width?: number;

  /**
   * @internal
   */
  @state()
  loading: boolean = false;

  /**
   * @internal
   */
  @state()
  media?: object;

  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();
    this.loadMedia();
  }

  /**
   * @internal
   */
  updated(props) {
    if (props.get('udi')) {
      this.loadMedia();
    }
  }

  /**
   * @internal
   */
  async loadMedia() {
    this.loading = true;
    this.media = await getService('entityResource').getById(this.udi, 'Media');
    this.loading = false;
  }

  /**
   * @internal
   */
  getUrl() {
    let sep = '?';
    let url = this.media.metaData.MediaPath;

    if (this.width) {
      sep = '&';
      url += `?width=${this.width}`;
    }

    if (this.height) {
      sep = '&';
      url += `${sep}height=${this.height}`;
    }

    if (this.coordinates) {
      url += `${sep}crop=${this.coordinates.x1},${this.coordinates.y1},${this.coordinates.x2},${this.coordinates.y2}&mode=percentage`;
    } else if (this.focalPoint) {
      url += `${sep}center=${this.focalPoint.top},${this.focalPoint.left}&mode=crop`;
    } else {
      url += `${sep}mode=crop`;
    }

    return url;
  }

  /**
   * @internal
   */
  render() {
    if (!this.media || this.loading) return html`<p>loading...</p>`;
    const url = this.getUrl()

    if (this.mode === 'cover')
      return html`<div style="background: url(${url}); background-size: cover; width: 100%; aspect-ratio: ${this.width ?? 1}/${this.height ?? 1}; overflow: hidden"></div>`;

    return html`<img src=${url} alt=${this.alt} height=${this.height} width=${this.width}>`;
  }
}

