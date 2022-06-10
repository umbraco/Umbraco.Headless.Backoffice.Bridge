/**
 * Represents an entity identifier.
 * @public
 *
 * @remarks
 * An Udi can be fully qualified or "closed" eg umb://document/\{guid\} "open" eg umb://document.
 */
export type Udi = String;

/**
 * Represents a set of coordinates.
 * @public
 */
export type Coordinates = {
  x1: Number,
  x2: Number,
  y1: Number;
  y2: Number;
}

/**
 * Represents a focal point.
 * @public
 */
export type FocalPoint = {
  left: Number;
  top: Number;
}

/**
 * Represents a crop size.
 * @public
 */
export type CropSize = {
  height: Number;
  width: Number;
}

