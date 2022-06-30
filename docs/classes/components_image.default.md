[@umbraco/headless-backoffice-bridge](../README.md) / [components/image](../modules/components_image.md) / default

# Class: default

[components/image](../modules/components_image.md).default

An element used to show an Image from the Media Library based on it's UDI.

**`example`** Renders an image with the UDI `umb://media/0f3cdbaba7a846c2979e16c113426bae` with a width of 800, a height of 600 and the focal point in the center of the image.

```html
<umbh-image udi="umb://media/0f3cdbaba7a846c2979e16c113426bae" width="800" height="600" focalpoint='{"left": 0.5, "top": 0.5}'></umbh-image>
```

## Hierarchy

- `LitElement`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](components_image.default.md#constructor)

### Properties

- [alt](components_image.default.md#alt)
- [coordinates](components_image.default.md#coordinates)
- [focalPoint](components_image.default.md#focalpoint)
- [height](components_image.default.md#height)
- [mode](components_image.default.md#mode)
- [udi](components_image.default.md#udi)
- [width](components_image.default.md#width)

## Constructors

### constructor

• **new default**()

#### Inherited from

LitElement.constructor

## Properties

### alt

• `Optional` **alt**: `string`

The image alt text.

#### Defined in

[src/components/image/index.ts:36](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/70258f2/src/components/image/index.ts#L36)

___

### coordinates

• `Optional` **coordinates**: [`Coordinates`](../interfaces/types.Coordinates.md)

If specified the image will be cropped based on the value.

#### Defined in

[src/components/image/index.ts:40](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/70258f2/src/components/image/index.ts#L40)

___

### focalPoint

• `Optional` **focalPoint**: [`FocalPoint`](../interfaces/types.FocalPoint.md)

If specified and the image is cropped the focal point is used to determine the center of the image.

#### Defined in

[src/components/image/index.ts:44](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/70258f2/src/components/image/index.ts#L44)

___

### height

• `Optional` **height**: `number`

The height of the image element.

#### Defined in

[src/components/image/index.ts:57](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/70258f2/src/components/image/index.ts#L57)

___

### mode

• `Optional` **mode**: [`ImageDisplayMode`](../enums/components_image.ImageDisplayMode.md)

Determines how the image is rendered

#### Defined in

[src/components/image/index.ts:48](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/70258f2/src/components/image/index.ts#L48)

___

### udi

• **udi**: `String`

The UDI of the image to show.

#### Defined in

[src/components/image/index.ts:53](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/70258f2/src/components/image/index.ts#L53)

___

### width

• `Optional` **width**: `number`

The width of the image element.

#### Defined in

[src/components/image/index.ts:61](https://github.com/umbraco/Umbraco.Headless.Backoffice.Bridge/blob/70258f2/src/components/image/index.ts#L61)
