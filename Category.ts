interface Category {
  _id: string;
  label: string;
}

type CategoryInput = Omit<Category, "_id">;
