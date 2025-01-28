(function () {
  function chiz(value: number | string) {
    if (typeof value === "number") {
      return value + 1;
    }

    if (typeof value === "string") {
      console.log(`Hello, ${value}`);
      return;
    }

    console.log("Impossible");
  }
})();
