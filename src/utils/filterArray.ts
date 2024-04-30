type ArrayObject = { [key: string]: string | number };

export const filterArray = (
  array: ArrayObject[],
  key: string,
  term: string
): ArrayObject[] => {
  const filterTerm = term.toLowerCase();

  return array.filter(
    (item) => String(item[key]).toLowerCase().includes(filterTerm)
  );
}
