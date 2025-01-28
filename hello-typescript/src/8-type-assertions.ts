(function () {
  const button = document.querySelector("#btn");

  button!.addEventListener("click", () => {
    console.log("Clicked!");
  });

  (button as HTMLButtonElement).addEventListener("click", () => {
    console.log("Clicked!");
  });
})();
