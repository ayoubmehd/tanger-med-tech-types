interface Transporter {
  _id: string;
  client: string;
  matricule: string;
  type: TransportType;
}

type TransporterInput = Omit<Transporter, "_id">;
