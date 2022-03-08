interface TransportType {
  _id: string;
  type: string;
}

type TransportTypeInput = Omit<TransportType, "_id">;
