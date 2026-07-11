/** @noSelfInFile */

interface vector {
  add(x: number, y: number, z: number): vector
  sub(x: number, y: number, z: number): vector
  mul(x: number, y: number, z: number): vector
  div(x: number, y: number, z: number): vector
  distance_to_xz_sqr(vector: vector): number
  /** Convert this HUD-space point into world space */
  hud_to_world(): vector
  /** Convert this HUD-space direction into world space */
  hud_to_world_dir(): vector
  /** Convert this world-space point into HUD space */
  world_to_hud(): vector
  /** Convert this world-space direction into HUD space */
  world_to_hud_dir(): vector
}

/** Modded exes greatly extend the `matrix` (Fmatrix) class. */
interface matrix {
  build_camera_dir(from: vector, view: vector, world_up: vector): matrix
  build_projection(fov: number, aspect: number, near_plane: number, far_plane: number): matrix
  /** Multiply `this = this * A` (4x3, no projection row) */
  mulA_43(a: matrix): matrix
  mulA_44(a: matrix): matrix
  /** Multiply `this = B * this` */
  mulB_43(b: matrix): matrix
  mulB_44(b: matrix): matrix
  /** `this = A * B` (4x3) */
  mul_43(a: matrix, b: matrix): matrix
  translate(x: number, y: number, z: number): matrix
  translate(v: vector): matrix
  translate_add(x: number, y: number, z: number): matrix
  translate_add(v: vector): matrix
  translate_over(x: number, y: number, z: number): matrix
  translate_over(v: vector): matrix
  /** Transform point in place; with two args writes result into the first */
  transform(dest: vector, src: vector): void
  transform(v: vector): void
  transform_tiny(dest: vector, src: vector): void
  transform_tiny(v: vector): void
  transform_dir(dest: vector, src: vector): void
  transform_dir(v: vector): void
  invert(): matrix
  invert(m: matrix): matrix
  /** 4x3 invert (not the full 4x4) */
  invert_b(m: matrix): matrix
  scale(x: number, y: number, z: number): matrix
  scale(v: vector): matrix
  setHPB(v: vector): matrix
  setXYZ(v: vector): matrix
  setXYZi(v: vector): matrix
  hud_to_world(): matrix
  world_to_hud(): matrix
}

/**
 * 4-component float vector (Fvector4). Added entirely by modded exes.
 * @customConstructor vector4
 */
declare class vector4 {
  constructor()
  x: number
  y: number
  z: number
  w: number
  set(x: number, y: number, z: number, w: number): vector4
  set(v: vector4): vector4
  add(v: vector4): vector4
  sub(v: vector4): vector4
  mul(scalar: number): vector4
  mul(v: vector4): vector4
  div(scalar: number): vector4
  div(v: vector4): vector4
  clamp(min: vector4, max: vector4): vector4
  similar(v: vector4, epsilon?: number): boolean
  magnitude(): number
  normalize(): vector4
  /** Normalize treating the vector as a plane (`xyz` normal, `w` distance) */
  normalize_as_plane(): vector4
  lerp(a: vector4, b: vector4, factor: number): vector4
}
