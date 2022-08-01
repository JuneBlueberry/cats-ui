export function createNamespace(name: string) {
  const prefixedName = `cats-${name}`;
  return [
    prefixedName,
  ] as const;
}