[@umbraco/headless-backoffice-bridge](../README.md) / [pickers/media](../modules/pickers_media.md) / MediaPickerConfig

# Interface: MediaPickerConfig

[pickers/media](../modules/pickers_media.md).MediaPickerConfig

## Table of contents

### Properties

- [allowMediaEdit](pickers_media.MediaPickerConfig.md#allowmediaedit)
- [cropSize](pickers_media.MediaPickerConfig.md#cropsize)
- [disableFocalPoint](pickers_media.MediaPickerConfig.md#disablefocalpoint)
- [disableFolderSelect](pickers_media.MediaPickerConfig.md#disablefolderselect)
- [multiple](pickers_media.MediaPickerConfig.md#multiple)
- [onlyFolders](pickers_media.MediaPickerConfig.md#onlyfolders)
- [onlyImages](pickers_media.MediaPickerConfig.md#onlyimages)
- [showDetails](pickers_media.MediaPickerConfig.md#showdetails)
- [startMedia](pickers_media.MediaPickerConfig.md#startmedia)
- [target](pickers_media.MediaPickerConfig.md#target)

### Methods

- [submit](pickers_media.MediaPickerConfig.md#submit)

## Properties

### allowMediaEdit

• `Optional` **allowMediaEdit**: `Boolean`

Specifies wether or not editing the Image in the Media Library in an inline dialog is allowed.

#### Defined in

[src/pickers/media/index.ts:22](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/media/index.ts#L22)

___

### cropSize

• `Optional` **cropSize**: [`Size`](types.Size.md)

If specified the image will be cropped to the size. The user will be able to select how the image is cropped.

#### Defined in

[src/pickers/media/index.ts:24](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/media/index.ts#L24)

___

### disableFocalPoint

• `Optional` **disableFocalPoint**: `Boolean`

Specifies wether the Focal Point is disabled or not.

#### Defined in

[src/pickers/media/index.ts:26](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/media/index.ts#L26)

___

### disableFolderSelect

• `Optional` **disableFolderSelect**: `Boolean`

Specifies wether selecttion folders is disabled or not.

#### Defined in

[src/pickers/media/index.ts:28](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/media/index.ts#L28)

___

### multiple

• `Optional` **multiple**: `Boolean`

Specifies wether or not multiple items can be selected.

#### Defined in

[src/pickers/media/index.ts:38](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/media/index.ts#L38)

___

### onlyFolders

• `Optional` **onlyFolders**: `Boolean`

Specifies wether or not only folders can be selected.

#### Defined in

[src/pickers/media/index.ts:42](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/media/index.ts#L42)

___

### onlyImages

• `Optional` **onlyImages**: `Boolean`

Specifies wether or not only images can be selected.

#### Defined in

[src/pickers/media/index.ts:40](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/media/index.ts#L40)

___

### showDetails

• `Optional` **showDetails**: `Boolean`

Specifies wether or not alt text, caption, focal point and crop can be edited.

#### Defined in

[src/pickers/media/index.ts:44](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/media/index.ts#L44)

___

### startMedia

• `Optional` **startMedia**: `String`

Udi of the Media item where the tree should start.

If not specified the tree will start at the root.

#### Defined in

[src/pickers/media/index.ts:34](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/media/index.ts#L34)

___

### target

• `Optional` **target**: [`MediaPickerItem`](pickers_media.MediaPickerItem.md)

If defined a dialog allowing editing alt text, caption, focal point and crop wil be opened and prefilled with the passed in values.

#### Defined in

[src/pickers/media/index.ts:36](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/pickers/media/index.ts#L36)

## Methods

### submit

▸ **submit**(`items`): `void`

Callback invoked when the submit buttton is clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | [`MediaPickerItem`](pickers_media.MediaPickerItem.md)[] | The selected items. |

#### Returns

`void`
