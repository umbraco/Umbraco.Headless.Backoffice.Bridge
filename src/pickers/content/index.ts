import { Udi } from '../../types'
import { editorService } from '../../base/angular'

/**
 * Represents a picked Content item.
 */
export interface ContentPickerItem {
  /** The UDI of the Content item. */
  udi: Udi
}

/**
 * The Content Picker configuration.
 */
export interface ContentPickerConfig {
  /**
   * UDI of the Content item where the tree should start.
   *
   * If not specified the tree will start at the root.
   */
  startContent?: Udi

  /** Specifies wether or not multiple items can be selected. */
  multiple?: Boolean

  /**
   * Callback invoked when the submit buttton is clicked.
   *
   * @param items - The selected items.
   */
  submit: (items: ContentPickerItem[]) => void
}

/**
 * @example
 *
 * ```js
 * import contentPicker from '@umbraco/headless-backoffice-bridge/pickers/content'
 *
 * contentPicker.show({
 *   multiple: true,
 *   submit(items) => {
 *     // do something with the selected items
 *   }
 * })
 * ```
 */
export default {
  /**
   * Shows the Content Picker.
   *
   * @param config - The Content Picker Configuration.
   */
  show: (config: ContentPickerConfig): void => {
    editorService.contentPicker({
      startNodeId: config.startContent,
      multiPicker: config.multiple,
      close: () => {
        editorService.close()
      },
      submit: (model: any) => {
        editorService.close()
        config.submit(model.selection.map((item: any) => ({
          udi: item.udi
        })))
      }
    })
  }
}
