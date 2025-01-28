(function () {
  type Id = number | string;
  let id: Id = 23;
  id = "2df5b32c";

  type Status = "active" | "inactive";
  let status: Status = "active";
  status = "inactive";

  // @ts-expect-error
  status = "Bijan";
})();
