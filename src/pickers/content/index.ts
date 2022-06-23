import { Udi } from '../../types'
import { editorService } from '../../base/angular'

export interface ContentPickerItem {
  udi: String
}

export interface ContentPickerConfig {
  startNode: Udi | undefined
  multiple: Boolean | undefined
  submit: (items: ContentPickerItem[]) => void
}

export default {
  show: (config: ContentPickerConfig): void => {
    editorService.contentPicker({
      startNodeId: config.startNode,
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
