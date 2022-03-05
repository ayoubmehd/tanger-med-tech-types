interface Reservation {
  _id: string;
  date: Date;
  isDone: boolean;
  container?: Container;
  transporter?: Transporter;
}
