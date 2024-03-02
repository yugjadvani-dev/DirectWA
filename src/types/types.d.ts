interface Spacing {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_14: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_36: number;
}

interface Color {
  primaryRedHex: string;
  primaryOrangeHex: string;
  primaryBlackHex: string;
  primaryDarkGreyHex: string;
  secondaryDarkGreyHex: string;
  primaryGreyHex: string;
  secondaryGreyHex: string;
  primaryLightGreyHex: string;
  secondaryLightGreyHex: string;
  primaryWhiteHex: string;
  primaryBlackRGBA: string;
  secondaryBlackRGBA: string;
}

interface FontFamily {
  inter_black: string;
  inter_bold: string;
  inter_extrabold: string;
  inter_extraLight: string;
  inter_light: string;
  inter_medium: string;
  inter_regular: string;
  inter_semibold: string;
  inter_thin: string;
}

interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_26: number;
  size_28: number;
  size_30: number;
}

interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
  radius_100: number;
}

type CountryCode = (typeof CountryCodeList)[number];

type CallingCode = string;

type CurrencyCode = string;

type TranslationLanguageCodeMap = {
  [key in TranslationLanguageCode]: string;
};

type TranslationLanguageCode = (typeof TranslationLanguageCodeList)[number];

interface Country {
  region: Region;
  subregion: Subregion;
  currency: CurrencyCode[];
  callingCode: CallingCode[];
  flag: string;
  name: TranslationLanguageCodeMap | string;
  cca2: CountryCode;
}

type Region = (typeof RegionList)[number];

type Subregion = (typeof SubregionList)[number];

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type RootStackParamList = {
  Home: undefined;
  PremiumFeature: undefined;
};
