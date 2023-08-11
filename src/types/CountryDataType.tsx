//generated with app.quicktype.io

export interface CountryDataType {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  gini?: { [key: string]: number };
}
[];

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  SAR?: Aed;
  XAF?: Aed;
  IRR?: Aed;
  AED?: Aed;
  UAH?: Aed;
  XOF?: Aed;
  XCD?: Aed;
  USD?: Aed;
  IDR?: Aed;
  BND?: Aed;
  SGD?: Aed;
  CZK?: Aed;
  RSD?: Aed;
  PGK?: Aed;
  AUD?: Aed;
  BMD?: Aed;
  VES?: Aed;
  EUR?: Aed;
  RON?: Aed;
  TVD?: Aed;
  EGP?: Aed;
  ILS?: Aed;
  JOD?: Aed;
  CNY?: Aed;
  LKR?: Aed;
  ZAR?: Aed;
  GBP?: Aed;
  GGP?: Aed;
  TZS?: Aed;
  DKK?: Aed;
  FOK?: Aed;
  NZD?: Aed;
  MYR?: Aed;
  INR?: Aed;
  GIP?: Aed;
  SDG?: BAM;
  XPF?: Aed;
  NPR?: Aed;
  UZS?: Aed;
  FJD?: Aed;
  MUR?: Aed;
  KID?: Aed;
  PHP?: Aed;
  NOK?: Aed;
  MZN?: Aed;
  SRD?: Aed;
  SYP?: Aed;
  LSL?: Aed;
  CVE?: Aed;
  MRU?: Aed;
  SLL?: Aed;
  THB?: Aed;
  IQD?: Aed;
  NGN?: Aed;
  RWF?: Aed;
  LYD?: Aed;
  PYG?: Aed;
  BSD?: Aed;
  SHP?: Aed;
  SBD?: Aed;
  KMF?: Aed;
  GHS?: Aed;
  SEK?: Aed;
  BRL?: Aed;
  NAD?: Aed;
  TOP?: Aed;
  PKR?: Aed;
  IMP?: Aed;
  BOB?: Aed;
  KGS?: Aed;
  HNL?: Aed;
  HKD?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  OMR?: Aed;
  BHD?: Aed;
  UYU?: Aed;
  YER?: Aed;
  KHR?: Aed;
  MAD?: Aed;
  BWP?: Aed;
  ZMW?: Aed;
  AMD?: Aed;
  TTD?: Aed;
  DZD?: Aed;
  BZD?: Aed;
  TWD?: Aed;
  TND?: Aed;
  HTG?: Aed;
  ANG?: Aed;
  CHF?: Aed;
  DOP?: Aed;
  CAD?: Aed;
  AOA?: Aed;
  TJS?: Aed;
  SZL?: Aed;
  SOS?: Aed;
  GYD?: Aed;
  MVR?: Aed;
  SCR?: Aed;
  AWG?: Aed;
  MGA?: Aed;
  ZWL?: Aed;
  KRW?: Aed;
  ERN?: Aed;
  JMD?: Aed;
  UGX?: Aed;
  KYD?: Aed;
  MNT?: Aed;
  GNF?: Aed;
  MKD?: Aed;
  BTN?: Aed;
  PEN?: Aed;
  KZT?: Aed;
  LRD?: Aed;
  QAR?: Aed;
  ARS?: Aed;
  FKP?: Aed;
  PAB?: Aed;
  BAM?: BAM;
  AFN?: Aed;
  ISK?: Aed;
  BGN?: Aed;
  GEL?: Aed;
  BIF?: Aed;
  ALL?: Aed;
  COP?: Aed;
  JEP?: Aed;
  KWD?: Aed;
  BDT?: Aed;
  GMD?: Aed;
  VND?: Aed;
  HUF?: Aed;
  ETB?: Aed;
  VUV?: Aed;
  KPW?: Aed;
  GTQ?: Aed;
  RUB?: Aed;
  MXN?: Aed;
  CLP?: Aed;
  MOP?: Aed;
  CRC?: Aed;
  DJF?: Aed;
  JPY?: Aed;
  AZN?: Aed;
  MWK?: Aed;
  KES?: Aed;
  CKD?: Aed;
  SSP?: Aed;
  PLN?: Aed;
  BBD?: Aed;
  TRY?: Aed;
  BYN?: Aed;
  NIO?: Aed;
  LAK?: Aed;
  MDL?: Aed;
  STN?: Aed;
  CDF?: Aed;
  LBP?: Aed;
  MMK?: Aed;
  TMT?: Aed;
  WST?: Aed;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
