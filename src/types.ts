/**
 * Represents an entity identifier.
 *
 * @remarks
 * An Udi can be fully qualified or "closed" eg `umb://document/{guid}` "open" eg `umb://document`.
 */
export type Udi = String

/**
 * Represents a set of coordinates.
 */
export interface Coordinates {
  x1: Number
  x2: Number
  y1: Number
  y2: Number
}

/**
 * Represents a focal point.
 */
export interface FocalPoint {
  left: Number
  top: Number
}

/**
 * Represents a size.
 */
export interface Size {
  height: Number
  width: Number
}
