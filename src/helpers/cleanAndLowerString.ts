export default function cleanAndLowerString(str: string) {
  if (!str) return str;
  return str
    .replace(/\s{2,}/g, " ")
    .trim()
    .toLowerCase();
}
