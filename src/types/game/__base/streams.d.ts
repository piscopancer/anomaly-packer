/**
 * Reader over an incoming save/net stream (luabind class `reader`, C++ `IReader`).
 * Every `r_*` reader is registered in a value-returning form — `local x = reader:r_u32()`.
 */
declare class reader {
  r_seek(pos: number): void
  r_tell(): number
  r_vec3(): vector
  r_float(): number
  r_u64(): number
  r_s64(): number
  r_u32(): number
  r_s32(): number
  r_u16(): number
  r_s16(): number
  r_u8(): number
  r_s8(): number
  r_bool(): boolean
  /** @param min @param max quantization bounds the value was written with */
  r_float_q16(min: number, max: number): number
  /** @param min @param max quantization bounds the value was written with */
  r_float_q8(min: number, max: number): number
  r_angle16(): number
  r_angle8(): number
  r_dir(): vector
  r_sdir(): vector
  r_stringZ(): string
  r_elapsed(): number
  r_advance(pos: number): void
  r_eof(): boolean
}
/**
 * Bidirectional save/net stream (luabind class `net_packet`, C++ `NET_Packet`).
 * `w_*` append to the stream; `r_*` consume it (value-returning form).
 * @customConstructor net_packet
 */
declare class net_packet {
  constructor()
  w_begin(type: number): void
  w_tell(): number
  w_vec3(v: vector): void
  w_float(value: number): void
  w_u64(value: number): void
  w_s64(value: number): void
  w_u32(value: number): void
  w_s32(value: number): void
  w_u16(value: number): void
  w_s16(value: number): void
  w_u8(value: number): void
  w_bool(value: boolean): void
  /** @param min @param max quantization bounds */
  w_float_q16(value: number, min: number, max: number): void
  /** @param min @param max quantization bounds */
  w_float_q8(value: number, min: number, max: number): void
  w_angle16(value: number): void
  w_angle8(value: number): void
  w_dir(v: vector): void
  w_sdir(v: vector): void
  w_stringZ(value: string): void
  w_matrix(matrix: matrix): void
  w_clientID(id: ClientID): void
  w_chunk_open8(): number
  w_chunk_close8(chunk: number): void
  w_chunk_open16(): number
  w_chunk_close16(chunk: number): void
  r_begin(type: number): number
  r_seek(pos: number): void
  r_tell(): number
  r_vec3(): vector
  r_float(): number
  r_u64(): number
  r_s64(): number
  r_u32(): number
  r_s32(): number
  r_u16(): number
  r_s16(): number
  r_u8(): number
  r_s8(): number
  r_bool(): boolean
  /** @param min @param max quantization bounds the value was written with */
  r_float_q16(min: number, max: number): number
  /** @param min @param max quantization bounds the value was written with */
  r_float_q8(min: number, max: number): number
  r_angle16(): number
  r_angle8(): number
  r_dir(): vector
  r_sdir(): vector
  r_stringZ(): string
  /** Reads an `Fmatrix`, filling `matrix` in place. */
  r_matrix(matrix: matrix): void
  r_clientID(): ClientID
  r_elapsed(): number
  r_advance(pos: number): void
  r_eof(): boolean
}
/**
 * Network client identifier (`ClientID`, luabind class `ClientID`).
 * @customConstructor ClientID
 */
declare class ClientID {
  constructor()
  value(): number
  set(value: number): void
}
