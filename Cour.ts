interface Cour {
  _id: string;
  size: number;
}

type CourInput = Omit<Cour, "_id">;
