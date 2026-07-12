/** @noSelfInFile */

declare namespace class_registrator {
  export function c_register(factory: any, client_object_class: string, clsid: string, script_clsid: string): void
  export function cs_register(factory: any, client_object_class: string, server_object_class: string, clsid: string, script_clsid: string): void
  export function register(object_factory: any): void
  export function s_register(factory: any, server_object_class: string, clsid: string, script_clsid: string): void
}
