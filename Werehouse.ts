interface Werehouse {
  _id: string;
  size: Size;
}

type WerehouseInput = Omit<Werehouse, "_id">;
