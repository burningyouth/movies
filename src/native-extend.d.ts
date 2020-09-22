// Extending native behavior of Object.keys()

type ObjectKeys<T> = T extends Object
  ? (keyof T)[]
  : T extends number
  ? []
  : T extends Array<any> | string
  ? string[]
  : never;

interface ObjectConstructor {
  keys<T>(obj: T): ObjectKeys<T>;
}
