interface Reservation {
  _id: string;
  date: Date;
  isDone: boolean;
  containers?: Container[];
  transporter?: Transporter;
}

interface ReservationInput
  extends Omit<Reservation, "_id" | "containers" | "transporter"> {
  containers?: ContainerInput[];
  transporter: TransporterInput;
}
