export default function moveItemInArray(originalArray, from, to) {
  const movedItem = originalArray.find((_item, index) => index === from);
  const remainingItems = originalArray.filter((_item, index) => index !== from);

  const reorderedItems = [
    ...remainingItems.slice(0, to),
    movedItem,
    ...remainingItems.slice(to),
  ];

  return reorderedItems;
}
