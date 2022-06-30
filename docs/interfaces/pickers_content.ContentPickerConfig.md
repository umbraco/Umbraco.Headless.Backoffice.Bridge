[@umbraco/headless-backoffice-bridge](../README.md) / [pickers/content](../modules/pickers_content.md) / ContentPickerConfig

# Interface: ContentPickerConfig

[pickers/content](../modules/pickers_content.md).ContentPickerConfig

The Content Picker configuration.

## Table of contents

### Properties

- [multiple](pickers_content.ContentPickerConfig.md#multiple)
- [startContent](pickers_content.ContentPickerConfig.md#startcontent)

### Methods

- [submit](pickers_content.ContentPickerConfig.md#submit)

## Properties

### multiple

• `Optional` **multiple**: `Boolean`

Specifies whether or not multiple items can be selected.

#### Defined in

[src/pickers/content/index.ts:24](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/content/index.ts#L24)

___

### startContent

• `Optional` **startContent**: `String`

Udi of the Content item where the tree should start.

If not specified the tree will start at the root.

#### Defined in

[src/pickers/content/index.ts:21](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/content/index.ts#L21)

## Methods

### submit

▸ **submit**(`items`): `void`

Callback invoked when the submit buttton is clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | [`ContentPickerItem`](pickers_content.ContentPickerItem.md)[] | The selected items. |

#### Returns

`void`
