interface Container {
  _id: string;
  position: Position;
  origin: string;
  type: ContainerType;
  size: Size;
  category: Category;
}

type ContainerInput = Omit<Container, "_id">;
