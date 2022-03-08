interface ContainerType {
  label: string;
}

type ContainerTypeInput = Omit<ContainerType, "_id">;
