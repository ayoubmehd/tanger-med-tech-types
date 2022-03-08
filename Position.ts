interface Position {
  _id: string;
  X: number;
  Y: number;
  Z: number;
}

type PositionInput = Omit<Position, "_id">;
