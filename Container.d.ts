import { ContainerType } from "./ContainerType";
import { Position } from "./Position";
import { Size } from "./Size";

export interface Container {
  arrivingDate: string;
  matricule: string;
  position: Position;
  origin: string;
  type: ContainerType;
  size: Size;
}
