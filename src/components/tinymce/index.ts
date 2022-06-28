import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getService } from '../../base/angular/index.js'

const $compile = getService('$compile')
const $rootScope = getService('$rootScope')

export enum EditingMode {
  Classic = 'classic',
  DistractionFree = 'distractoin-free'
}

@customElement('umbh-tinymce')
export default class extends LitElement {
  @property({ type: Number, attribute: 'max-image-size' })
  get maxImageSize (): number { return this.#scope.model.config.editor.maxImageSize }

  set maxImageSize (value: number) { this.#scope.model.config.editor.maxImageSize = value }

  @property({ type: String })
  get mode (): EditingMode { return this.#scope.model.config.editor.mode }

  set mode (value: EditingMode) { this.#scope.model.config.editor.mode = value }

  @property({ type: Array, attribute: false })
  get stylesheets (): string[] { return this.#scope.model.config.editor.stylesheets }

  set stylesheets (value: string[]) { this.#scope.model.config.editor.stylesheets = value }

  @property({ type: Array, attribute: false })
  get toolbar (): string[] { return this.#scope.model.config.editor.toolbar }

  set toolbar (value: string[]) { this.#scope.model.config.editor.toolbar = value === undefined || value === null ? this.#defaultToolbar : value }

  @property({ type: String })
  get value (): string { return this.#scope.model.value }

  set value (value: string) { this.#scope.model.value = value }

  #template: (scope: any) => string = () => ''
  #scope: any = {}

  #defaultToolbar = [
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

  constructor () {
    super()

    this.#scope = $rootScope.$new(true)

    this.#scope.model = {
      view: 'rte',
      config: {
        editor: {
          mode: EditingMode.Classic,
          stylesheets: [],
          toolbar: this.#defaultToolbar
        }
      }
    }

    this.#scope.$watch('model.value', (newValue: string, oldValue: string) => {
      if (newValue === oldValue) return
      const event = new InputEvent('input', { bubbles: true, composed: true })
      this.dispatchEvent(event)
    })
  }

  createRenderRoot (): HTMLElement { return this }

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

  render (): any {
    return html`${this.#template(this.#scope)}`
  }
}
