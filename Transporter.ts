interface Transporter {
  _id: string;
  client: string;
  matricule: string;
  type: TransportType;
}

interface TransporterInput extends Omit<Transporter, "_id" | "type"> {
  type: TransportTypeInput;
}
