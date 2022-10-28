export default function pick(sourceObject: any, keys: string[]) {
  const newObject = {};
  for (const key of keys) {
    if (!sourceObject?.[key] && sourceObject?.[key] !== 0) continue;
    newObject[key] = sourceObject[key];
  }

  return newObject;
}
