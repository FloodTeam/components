/**
 * Turns a dot noation path and a value into a nested object, with option
 * to pass in an existing object.
 *
 * @param path The dot notation path you are setting value for
 * @param value The value you want set
 * @param obj An optional object that you want to start with
 * @returns An object with the new injected value
 */
export default function valueToPath(path: string, value?: any, obj?: any) {
  const newObj = obj ? obj : {};
  console.log(path, value, obj);
  path
    .split(".")
    .reduce(
      (accumulator, val, i, pathParts) =>
        accumulator[val]
          ? accumulator[val]
          : (accumulator[val] =
              pathParts.length === i + 1 ? (value ? value : null) : {}),
      newObj
    );

  return newObj;
}
