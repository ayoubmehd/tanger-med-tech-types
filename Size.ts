interface Size {
  _id: string;
  X: number;
  Y: number;
  Z: number;
}

type SizeInput = Omit<Size, "_id">;
