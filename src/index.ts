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

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);

      this.model = model;
    }

    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  // test Car()
  const myCar = new Car("Toyota", 2020, "Corolla");

  console.log(myCar.getInfo()); // Output: Make: Toyota, Year: 2020
  console.log(myCar.getModel()); // Output: Model: Corolla

  function processValue(value: string | number): number {
    let processedValue: number;

    if (typeof value === "string") {
      processedValue = value.length;
    } else {
      // value is a number
      processedValue = value * 2;
    }

    return processedValue;
  }

  // test processValue()
  console.log(processValue("hello")); // Output: 5
  console.log(processValue(10)); // Output: 20

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    let mostExpensiveProduct: Product = products[0];

    products.forEach((product) => {
      if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
      }
    });

    return mostExpensiveProduct;
  }

  // test getMostExpensiveProduct()
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  console.log(getMostExpensiveProduct(products));
  // Output: { name: "Bag", price: 50 }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    const weekends: Day[] = [Day.Saturday, Day.Sunday];
    let dayType: string;

    if (weekends.includes(day)) {
      dayType = "Weekend";
    } else {
      dayType = "Weekday";
    }

    return dayType;
  }

  // test getDayType()
  console.log(getDayType(Day.Monday)); // Output: "Weekday"
  console.log(getDayType(Day.Sunday)); // Output: "Weekend"
}
