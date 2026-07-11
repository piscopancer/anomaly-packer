/** @customConstructor vector */
declare class vector {
  constructor()
  x: number
  y: number
  z: number
  set(x: number, y: number, z: number): vector
  set(v: vector): vector
  add(value: number): vector
  add(v: vector): vector
  add(a: vector, b: vector): vector
  add(v: vector, value: number): vector
  sub(value: number): vector
  sub(v: vector): vector
  sub(a: vector, b: vector): vector
  sub(v: vector, value: number): vector
  mul(value: number): vector
  mul(v: vector): vector
  mul(a: vector, b: vector): vector
  mul(v: vector, value: number): vector
  div(value: number): vector
  div(v: vector): vector
  div(a: vector, b: vector): vector
  div(v: vector, value: number): vector
  invert(): vector
  invert(v: vector): vector
  min(v: vector): vector
  min(a: vector, b: vector): vector
  max(v: vector): vector
  max(a: vector, b: vector): vector
  abs(v: vector): vector
  similar(v: vector, epsilon?: number): boolean
  set_length(length: number): vector
  align(): vector
  clamp(v: vector): vector
  clamp(min: vector, max: vector): vector
  inertion(v: vector, factor: number): vector
  average(v: vector): vector
  average(a: vector, b: vector): vector
  lerp(a: vector, b: vector, factor: number): vector
  mad(dir: vector, value: number): vector
  mad(a: vector, b: vector): vector
  mad(a: vector, b: vector, value: number): vector
  mad(a: vector, b: vector, c: vector): vector
  magnitude(): number
  normalize(): vector
  normalize(v: vector): vector
  normalize_safe(): vector
  normalize_safe(v: vector): vector
  dotproduct(v: vector): number
  crossproduct(a: vector, b: vector): vector
  distance_to_xz(v: vector): number
  distance_to_sqr(pos: vector): number
  distance_to(to: vector): number
  setHP(h: number, p: number): vector
  getH(): number
  getP(): number
  reflect(dir: vector, normal: vector): vector
  slide(dir: vector, normal: vector): vector
}
/**
 * 4x3/4x4 float matrix. Rows `i`/`j`/`k` are the basis vectors, `c` is translation;
 * `_14_`/`_24_`/`_34_`/`_44_` are the fourth column.
 * @customConstructor matrix
 */
declare class matrix {
  constructor()
  i: vector
  _14_: number
  j: vector
  _24_: number
  k: vector
  _34_: number
  c: vector
  _44_: number
  set(m: matrix): matrix
  set(i: vector, j: vector, k: vector, c: vector): matrix
  identity(): matrix
  /** Build transform from a quaternion rotation and a translation */
  mk_xform(rotation: TODO, translate: vector): matrix
  mul(a: matrix, b: matrix): matrix
  mul(m: matrix, scalar: number): matrix
  mul(scalar: number): matrix
  div(m: matrix, scalar: number): matrix
  div(scalar: number): matrix
  setHPB(h: number, p: number, b: number): matrix
  setXYZ(x: number, y: number, z: number): matrix
  setXYZi(x: number, y: number, z: number): matrix
  getHPB(): vector
}
/** @customConstructor vector2 */
declare class vector2 {
  constructor()
  x: number
  y: number
  set(x: number, y: number): vector2
  set(v: vector2): vector2
}
/**
 * RGBA float color (`Fcolor`, luabind class `fcolor`). Components are floats,
 * conventionally in the `0..1` range.
 * @customConstructor fcolor
 */
declare class fcolor {
  constructor()
  r: number
  g: number
  b: number
  a: number
  set(r: number, g: number, b: number, a: number): fcolor
  set(c: fcolor): fcolor
  /** @param packed packed `u32` color (`0xAARRGGBB`) */
  set(packed: number): fcolor
}
