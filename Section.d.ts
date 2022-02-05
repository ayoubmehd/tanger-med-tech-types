import { Categorie } from "./Categorie";
import { Container } from "./Container";

export interface Section {
  containers?: Container[];
  categories?: Categorie[];
}
