export function mapObject<T extends Record<string, unknown>, MappedValues>(
  obj: T,
  map: (key: keyof T, value: T[keyof T]) => [keyof T, MappedValues]
): Record<keyof T, MappedValues> {
  return (
    (Object.entries(obj) as [keyof T, T[keyof T]][])
      // eslint-disable-next-line unicorn/no-array-reduce
      .reduce((result, [key, value]) => {
        const [mappedKey, mappedValue] = map(key, value);
        return {
          ...result,
          [mappedKey]: mappedValue,
        };
      }, {} as Record<keyof T, MappedValues>)
  );
}
