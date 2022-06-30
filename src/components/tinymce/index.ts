import { LitElement, TemplateResult, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getService } from '../../base/angular/index.js'

const $compile = getService('$compile')
const $rootScope = getService('$rootScope')

/**
 * The TinyMCE editing mode.
 */
export enum EditingMode {
  /** Full editor mode. */
  Classic = 'classic',
  /** Distraction free mode. */
  DistractionFree = 'distraction-free'
}

/**
 * An element wrapping the TinyMCE editor.
 *
 * @example
 *
 * Renders a Rich Text Editor in distraction free mode with a link, unlink and a media picker button on the toolbar and the max size of the image inserted of 200.
 *
 * ```html
 * <umbh-tinymce mode="distraction-free" maximagesize="200" toolbar='["link", "unlink", "umbmediapicker"]'></umbh-tinymce>
 * ```
 *
 * @remarks
 * Cannot be used inside ShadowDom.
 */
@customElement('umbh-tinymce')
export default class TinyMceElement extends LitElement {
  #template: (scope: any) => string = () => ''
  #scope: any = {}

  /** Max size of image when inserted. */
  @property({ type: Number })
  maxImageSize: number = 500

  /** The editing mode. */
  @property({ type: String })
  mode = EditingMode.Classic

  /** Stylesheets to load, must be the name of the stylesheet from the stylesheets tree without the `.css` extension.. */
  @property({ type: Array })
  stylesheets: string[] = []

  /** The tooblar options. */
  @property({ type: Array })
  toolbar = [
    'ace',
    'styleselect',
    'bold',
    'italic',
    'alignleft',
    'aligncenter',
    'alignright',
    'bullist',
    'numlist',
    'outdent',
    'indent',
    'link',
    'unlink',
    'umbmediapicker',
    'umbembeddialog'
  ]

  /** The value */
  @property({ type: String })
  value?: string

  constructor () {
    super()

    this.#scope = $rootScope.$new(true)

    this.#scope.model = {
      view: 'rte',
      config: {
        editor: {
          mode: this.mode,
          stylesheets: this.stylesheets,
          toolbar: this.toolbar
        }
      }
    }

    this.#scope.$watch('model.value', (newValue: string, oldValue: string) => {
      if (newValue === oldValue) return
      const event = new InputEvent('input', { bubbles: true, composed: true })
      this.dispatchEvent(event)
    })
  }

  /** @ignore */
  createRenderRoot (): HTMLElement { return this }

  /** @ignore */
  connectedCallback (): void {
    super.connectedCallback()

    // find the umb-property and fetch the dataTypeKey, this is required
    // by some of the server api's to look up if start nodes should be ignored
    // and we don't wan't to expose this as a property on this element since
    // it's an implementation detail
    const propertyElement = this.closest('umb-property')
    if (propertyElement !== null) {
      const propertyScope = window.angular.element(propertyElement)?.scope()
      // @ts-expect-error
      this.#scope.model.dataTypeKey = propertyScope?.property?.dataTypeKey
    }

    // unfortunately the normal rte and the grid rte are two different editors
    // even though they are mostly the same the normal does not work inside
    // the grid, so we need to detect if we are inside the grid and return
    // the correct HTML. If we have a parent element with the css class .umb-grid
    // we assume we are inside the grid
    const inGrid = this.closest('.umb-grid')

    this.#template = $compile((inGrid != null)
      ? '<grid-rte value="model.value" datatype-key="{{ model.dataTypeKey }}" configuration="model.config.editor"></grid-rte>'
      : '<ng-form><umb-property-editor model="model"></umb-property-editor></ng-form>')
  }

  /** @ignore */
  willUpdate (changedProperties: Map<PropertyKey, unknown>): void {
    if (changedProperties.has('maxImageSize')) {
      this.#scope.model.config.editor.maxImageSize = this.maxImageSize
    }
    if (changedProperties.has('mode')) {
      this.#scope.model.config.editor.mode = this.mode
    }
    if (changedProperties.has('stylesheets')) {
      this.#scope.model.config.editor.stylesheets = this.stylesheets
    }
    if (changedProperties.has('toolbar')) {
      this.#scope.model.config.editor.toolbar = this.toolbar
    }
    if (changedProperties.has('value')) {
      this.#scope.model.config.editor.value = this.value
    }
  }

  /** @ignore */
  render (): TemplateResult {
    console.log(this.#scope.model)
    return html`${this.#template(this.#scope)}`
  }
}
