import { TransportType } from "./TransportType";

export interface Transporter {
  client: string;
  matricule: string;
  type: TransportType;
}
