{
  function formatString(input: string, toUpper?: boolean): string {
    let formattedString: string;
    if (toUpper === false) {
      formattedString = input.toLowerCase();
    } else {
      // both true and undefined
      formattedString = input.toUpperCase();
    }

    return formattedString;
  }

  // test formatString()
  console.log(formatString("Hello")); // Output: "HELLO"
  console.log(formatString("Hello", true)); // Output: "HELLO"
  console.log(formatString("Hello", false)); // Output: "hello"

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    let filteredItems: { title: string; rating: number }[] = items.filter(
      function (item) {
        return item.rating >= 4;
      }
    );

    return filteredItems;
  }

  // test filterByRating()
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  console.log(filterByRating(books));
  // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let concatenatedArray: T[] = [];
    arrays.forEach((array) => {
      concatenatedArray.push(...array);
    });

    return concatenatedArray;
  }

  // test concatenateArrays()
  console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
  console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
}
