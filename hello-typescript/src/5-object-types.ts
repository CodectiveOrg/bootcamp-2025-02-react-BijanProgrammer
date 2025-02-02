(function () {
  type Person = {
    firstName: string;
    lastName: string;
  };

  interface IPerson {
    firstName: string;
    lastName: string;
  }

  const person: Person = {
    firstName: "Bijan",
    lastName: "Eisapour",
  };

  // @ts-expect-error
  person.age = 23;

  // @ts-expect-error
  person.firstName = 42;
})();

type OrmType =
  | {
      auth: () => void;
    }
  | {
      create: () => void;
    };

interface Orm {
  create: () => void;
  read: () => void;
  update: () => void;
  delete: () => void;
}

interface Orm {
  auth: () => void;
}

interface AuthOrm extends Orm {
  register: () => void;
  login: () => void;
}

class SqlOrm implements Orm {
  create() {}
  read() {}
  update() {}
  delete() {}
  auth() {}
}

class MongoOrm implements Orm {
  create() {}
  read() {}
  update() {}
  delete() {}
  auth() {}
}

const orm: Orm = new MongoOrm();

function getBook(id: string) {
  return orm.read();
}
