{
  function formatString(input: string, toUpper?: boolean): string {
    let formattedString: string;
    if (toUpper === false) {
      formattedString = input.toLowerCase();
    } else {
      formattedString = input.toUpperCase();
    }

    return formattedString;
  }

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

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let concatenatedArray: T[] = [];
    arrays.forEach((array) => {
      concatenatedArray.push(...array);
    });

    return concatenatedArray;
  }
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

  function processValue(value: string | number): number {
    let processedValue: number;

    if (typeof value === "string") {
      processedValue = value.length;
    } else {
      processedValue = value * 2;
    }

    return processedValue;
  }

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
}
