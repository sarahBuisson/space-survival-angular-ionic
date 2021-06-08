export interface Pokedex {
  party: Party;
  bestiaire: Bestiaire;
}

export interface Bestiaire {
  locations: Location[];
  items: Item[];
}

export interface Item {
  name: string;
  type: string;
  actions: Action[];
  value: string;
}

export interface Action {
  name: string;
  effect: Player;
}

export interface Player {
  name: string;
  status: Status;
}

export interface Status {
  soif?: number;
  faim?: number;
  blessure?: number;
  sommeil?: number;
  folie?: number;
}

export interface Location {
  name: string;
  type: string;
  imageURL: string;
  content: any[];
}

export interface Party {
  player: Player;
  currentLocalisation: Localisation;
  univers: Localisation[];
}

export interface Localisation {
  x: number;
  y: number;
  name: string;
  type: string;
  sousLocations: Localisation[];
  content: Item[];
}
