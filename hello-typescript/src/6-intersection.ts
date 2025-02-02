(function () {
  type Person = {
    firstName: string;
    lastName: string;
  };

  type User = Person & {
    username: string;
    password: string;
  };
})();
