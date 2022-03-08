interface Container {
  _id: string;
  position: Position;
  origin: string;
  type: ContainerType;
  size: Size;
  category: Category;
}

interface ContainerInput
  extends Omit<Container, "_id" | "position" | "type" | "size" | "category"> {
  position: PositionInput;
  type: ContainerTypeInput;
  size: SizeInput;
  category: CategoryInput;
}
