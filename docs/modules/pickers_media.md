[@umbraco/headless-backoffice-bridge](../README.md) / pickers/media

# Module: pickers/media

## Table of contents

### Interfaces

- [MediaPickerConfig](../interfaces/pickers_media.MediaPickerConfig.md)
- [MediaPickerItem](../interfaces/pickers_media.MediaPickerItem.md)

### Variables

- [default](pickers_media.md#default)

## Variables

### default

• **default**: `Object`

**`example`** ```js
import mediaPicker from '@umbraco/headless-backoffice-bridge/pickers/media'

mediaPicker.show({
  multiple: true,
  onlyImages: true,
  submit(items) => {
    // do something with the selected items
  }
})
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `show` | (`config`: [`MediaPickerConfig`](../interfaces/pickers_media.MediaPickerConfig.md)) => `void` |

#### Defined in

[src/pickers/media/index.ts:68](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/70258f2/src/pickers/media/index.ts#L68)
