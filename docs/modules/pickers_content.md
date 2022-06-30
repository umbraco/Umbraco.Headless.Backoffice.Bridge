[@umbraco/headless-backoffice-bridge](../README.md) / pickers/content

# Module: pickers/content

## Table of contents

### Interfaces

- [ContentPickerConfig](../interfaces/pickers_content.ContentPickerConfig.md)
- [ContentPickerItem](../interfaces/pickers_content.ContentPickerItem.md)

### Variables

- [default](pickers_content.md#default)

## Variables

### default

• **default**: `Object`

**`example`** ```js
import contentPicker from '@umbraco/headless-backoffice-bridge/pickers/content'

contentPicker.show({
  multiple: true,
  submit(items) => {
    // do something with the selected items
  }
})
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `show` | (`config`: [`ContentPickerConfig`](../interfaces/pickers_content.ContentPickerConfig.md)) => `void` |

#### Defined in

[src/pickers/content/index.ts:48](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/70258f2/src/pickers/content/index.ts#L48)
