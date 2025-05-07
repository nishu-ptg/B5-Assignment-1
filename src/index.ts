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

  // test
  console.log(formatString("Hello")); // Output: "HELLO"
  console.log(formatString("Hello", true)); // Output: "HELLO"
  console.log(formatString("Hello", false)); // Output: "hello"
}
