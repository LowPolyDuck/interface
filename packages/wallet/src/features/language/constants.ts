// List of supported langauges in app
export enum Language {
  ChineseSimplified = 'Chinese, Simplified',
  ChineseTraditional = 'Chinese, Traditional',
  Dutch = 'Dutch',
  English = 'English',
  French = 'French',
  Hindi = 'Hindi',
  Indonesian = 'Indonesian',
  Japanese = 'Japanese',
  Malay = 'Malay',
  Portuguese = 'Portuguese',
  Russian = 'Russian',
  Spanish = 'Spanish',
  Thai = 'Thai',
  Turkish = 'Turkish',
  Ukrainian = 'Ukrainian',
  Urdu = 'Urdu',
  Vietnamese = 'Vietnamese',
}

// List of supported locales in app
// comprised of two letter language code (ISO 639) combined with two letter country code (ISO 3166)
// Matches to locale codes for languages provided by Crowdin
export enum Locale {
  ChineseChina = 'zh-CN',
  ChineseTaiwan = 'zh-TW',
  DutchNetherlands = 'nl-NL',
  EnglishUnitedStates = 'en-US',
  FrenchFrance = 'fr-FR',
  HindiIndia = 'hi-IN',
  IndonesianIndonesia = 'id-ID',
  JapaneseJapan = 'ja-JP',
  MalayMalaysia = 'ms-MY',
  PortuguesePortugal = 'pt-PT',
  RussianRussia = 'ru-RU',
  SpanishSpain = 'es-ES',
  ThaiThailand = 'th-TH',
  TurkishTurkey = 'tr-TR',
  UkrainianUkraine = 'uk-UA',
  UrduPakistan = 'ur-PK',
  VietnameseVietnam = 'vi-VN',
}

export const ORDERED_LANGUAGES: Language[] = [
  Language.English,
  Language.ChineseSimplified,
  Language.ChineseTraditional,
  Language.Dutch,
  Language.French,
  Language.Hindi,
  Language.Indonesian,
  Language.Japanese,
  Language.Malay,
  Language.Portuguese,
  Language.Russian,
  Language.Spanish,
  Language.Thai,
  Language.Turkish,
  Language.Ukrainian,
  Language.Urdu,
  Language.Vietnamese,
]
