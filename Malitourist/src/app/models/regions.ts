import { Image } from './image';

export interface Regions{
  id: number,
  codeRegions: string,
  nom: string,
  langue: string,
  superficie_regions: number,
  domaine_activite: string,
  src: string,
  image: Image
}