import { PropType } from 'vue'

export function createNamespace(name: string) {
  const prefixedName = `cats-${name}`;
  return [
    prefixedName,
  ] as const;
}

export const createBooleanProp = <T>(defaultVal: T) => ({
  type: Boolean,
  default: defaultVal,
});

export const createNumericProp = <T>(defaultVal: T) => ({
  type: [Number, String],
  default: defaultVal,
});

export const createStringProp = <T>(defaultVal: T) => ({
  type: String as unknown as PropType<T>,
  default: defaultVal,
});

export const createArrayProp = <T>() => ({
  type: Array as PropType<T[]>,
  default: () => [],
});

export const createObjectProp = <T>() => ({
  type: Object as PropType<T>,
  default: () => { return {} },
});