import * as initialData from '../assets/sampleData.json';
import { Localisation, Party, Player } from './model';

// eslint-disable-next-line @typescript-eslint/ban-types
export const deepClone = <T extends object>(value: T): T => {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (value instanceof Set) {
    return new Set(Array.from(value, deepClone)) as T;
  }

  if (value instanceof Map) {
    return new Map(Array.from(value, ([k, v]) => [k, deepClone(v)])) as T;
  }

  if (value instanceof Date) {
    return new Date(value) as T;
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as T;
  }

  // eslint-disable-next-line max-len
  return Object.keys(value).reduce((acc, key) => Object.assign(acc, {[key]: deepClone(value[key])}), (Array.isArray(value) ? [] : {}) as T);
};

export const buildPlayer = (name?: string): Player => {
  const player = deepClone(initialData.default.party.player) as Player;
  if (name) {
    player.name = name;
  }
  return player;
};

const randomOf = <T>(univers: T[]): T => univers[Math.floor(Math.random() * univers.length)];

export const buildPlanet = (name: string): Localisation => {
  const localisation = deepClone(randomOf(initialData.default.party.univers)) as Localisation;
  localisation.name = name;
  return localisation;
};


export const buildParty = (name?: string): Party => {
  const party = deepClone(initialData.default.party) as Party;
  party.player = buildPlayer(name);
  for (let i = 0; i < 10; i++) {
    party.univers.push(buildPlanet('something' + i));
  }
  return party;
};
