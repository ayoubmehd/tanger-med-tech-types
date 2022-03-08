interface Section {
  _id: string;
  containers?: Container[];
  category?: Category;
}

type SectionInput = Omit<Section, "_id">;
