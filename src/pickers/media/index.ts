import { Coordinates, CropSize, FocalPoint, Udi } from '../../types';
import { editorService } from '../../base/angular';

export type MediaPickerItem = {
  altText: String | undefined;
  caption: String | undefined;
  coordinates: Coordinates | undefined;
  focalPoint: FocalPoint | undefined;
  udi: String;
}

export type MediaPickerConfig = {
  allowMediaEdit: Boolean | undefined;
  cropSize: CropSize | undefined;
  disableFocalPoint: Boolean | undefined;
  disableFolderSelect: Boolean | undefined;
  startNode: Udi | undefined;
  selection: MediaPickerItem | undefined;
  multiple: Boolean | undefined;
  onlyImages: Boolean | undefined;
  onlyFolders: Boolean | undefined;
  showDetails: Boolean | undefined;
  submit: (items: MediaPickerItem[]) => void;
}

export default {
  show: (config: MediaPickerConfig): void =>
    editorService.mediaPicker({
      allowMediaEdit: config.allowMediaEdit,
      cropSize: config.cropSize,
      currentTarget: config.selection,
      disableFocalPoint: config.disableFocalPoint,
      disableFolderSelect: config.disableFolderSelect,
      startNodeId: config.startNode,
      multiPicker: config.multiple,
      onlyImages: config.onlyImages,
      onlyFolders: config.onlyFolders,
      showDetails: config.showDetails,
      close: () => {
        editorService.close();
      },
      submit: (model: any) => {
        editorService.close();
        config.submit(model.selection.map((item: any) => ({
          altText: item.altText,
          caption: item.caption,
          coordinates: item.coordinates,
          focalPoint: item.focalPoint,
          udi: item.udi,
        })));
      },
    })
}

