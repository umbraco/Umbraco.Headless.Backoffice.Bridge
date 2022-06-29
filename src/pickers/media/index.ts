import { Coordinates, Size, FocalPoint, Udi } from '../../types'
import { editorService } from '../../base/angular'

/**
 * Represents a picked Media item.
 */
export interface MediaPickerItem {
  /** The image alt text. */
  altText?: String
  /** The image alt caption. */
  caption?: String
  /** The image crop coordinates. */
  coordinates?: Coordinates
  /** The image focal point. */
  focalPoint?: FocalPoint
  /** The UDI of the Media item. */
  udi: String
}

export interface MediaPickerConfig {
  /** Specifies wether or not editing the Image in the Media Library in an inline dialog is allowed. */
  allowMediaEdit?: Boolean
  /** If specified the image will be cropped to the size. The user will be able to select how the image is cropped. */
  cropSize?: Size
  /** Specifies wether the Focal Point is disabled or not. */
  disableFocalPoint?: Boolean
  /** Specifies wether selecttion folders is disabled or not. */
  disableFolderSelect?: Boolean
  /**
   * Udi of the Media item where the tree should start.
   *
   * If not specified the tree will start at the root.
   */
  startMedia?: Udi
  /** If defined a dialog allowing editing alt text, caption, focal point and crop wil be opened and prefilled with the passed in values. */
  target?: MediaPickerItem
  /** Specifies wether or not multiple items can be selected. */
  multiple?: Boolean
  /** Specifies wether or not only images can be selected. */
  onlyImages?: Boolean
  /** Specifies wether or not only folders can be selected. */
  onlyFolders?: Boolean
  /** Specifies wether or not alt text, caption, focal point and crop can be edited. */
  showDetails?: Boolean
  /**
   * Callback invoked when the submit buttton is clicked.
   *
   * @param items - The selected items.
   */
  submit: (items: MediaPickerItem[]) => void
}

/**
 * @example
 *
 * ```js
 * import mediaPicker from '@umbraco/headless-backoffice-bridge/pickers/media'
 *
 * mediaPicker.show({
 *   multiple: true,
 *   onlyImages: true,
 *   submit(items) => {
 *     // do something with the selected items
 *   }
 * })
 * ```
 */
export default {
  /**
   * Shows the Media Picker.
   *
   * @param config - The Media Picker Configuration.
   */
  show: (config: MediaPickerConfig): void =>
    editorService.mediaPicker({
      allowMediaEdit: config.allowMediaEdit,
      cropSize: config.cropSize,
      currentTarget: config.target,
      disableFocalPoint: config.disableFocalPoint,
      disableFolderSelect: config.disableFolderSelect,
      startNodeId: config.startMedia,
      multiPicker: config.multiple,
      onlyImages: config.onlyImages,
      onlyFolders: config.onlyFolders,
      showDetails: config.showDetails,
      close: () => {
        editorService.close()
      },
      submit: (model: any) => {
        editorService.close()
        config.submit(model.selection.map((item: any) => ({
          altText: item.altText,
          caption: item.caption,
          coordinates: item.coordinates,
          focalPoint: item.focalPoint,
          udi: item.udi
        })))
      }
    })
}
