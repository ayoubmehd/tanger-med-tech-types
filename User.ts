interface User {
  _id: string;
  username: string;
  password: string;
  role?: Role;
}

type UserInput = Omit<User, "_id">;
