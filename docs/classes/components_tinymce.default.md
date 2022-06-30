[@umbraco/headless-backoffice-bridge](../README.md) / [components/tinymce](../modules/components_tinymce.md) / default

# Class: default

[components/tinymce](../modules/components_tinymce.md).default

An element wrapping the TinyMCE editor.

**`example`** Renders a Rich Text Editor in distraction free mode with a link, unlink and a media picker button on the toolbar and the max size of the image inserted of 200.

```html
<umbh-tinymce mode="distraction-free" maximagesize="200" toolbar='["link", "unlink", "umbmediapicker"]'></umbh-tinymce>
```

**`remarks`** Cannot be used inside ShadowDom.

## Hierarchy

- `LitElement`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](components_tinymce.default.md#constructor)

### Properties

- [maxImageSize](components_tinymce.default.md#maximagesize)
- [mode](components_tinymce.default.md#mode)
- [stylesheets](components_tinymce.default.md#stylesheets)
- [toolbar](components_tinymce.default.md#toolbar)
- [value](components_tinymce.default.md#value)

## Constructors

### constructor

• **new default**()

#### Overrides

LitElement.constructor

## Properties

### maxImageSize

• **maxImageSize**: `number` = `500`

Max size of image when inserted.

#### Defined in

[src/components/tinymce/index.ts:39](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/components/tinymce/index.ts#L39)

___

### mode

• **mode**: [`EditingMode`](../enums/components_tinymce.EditingMode.md) = `EditingMode.Classic`

The editing mode.

#### Defined in

[src/components/tinymce/index.ts:43](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/components/tinymce/index.ts#L43)

___

### stylesheets

• **stylesheets**: `string`[] = `[]`

Stylesheets to load, must be the name of the stylesheet from the stylesheets tree without the `.css` extension..

#### Defined in

[src/components/tinymce/index.ts:47](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/components/tinymce/index.ts#L47)

___

### toolbar

• **toolbar**: `string`[]

The tooblar options.

#### Defined in

[src/components/tinymce/index.ts:51](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/components/tinymce/index.ts#L51)

___

### value

• `Optional` **value**: `string`

The value

#### Defined in

[src/components/tinymce/index.ts:71](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/556873b/src/components/tinymce/index.ts#L71)
