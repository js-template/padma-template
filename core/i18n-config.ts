export const i18n = {
   defaultLocale: "en",
   // add all country codes here
   locales: [
      "en",
      "es",
      "ar",
      "fr",
      "de",
      "it",
      "pt",
      "ru",
      "zh",
      "ja",
      "ko",
      "tr",
      "nl",
      "pl",
      "sv",
      "da",
      "fi",
      "no",
      "cs",
      "hu",
      "ro",
      "el",
      "th",
      "id",
      "vi",
      "bg",
      "uk",
      "hr",
      "sk",
      "sl",
      "et",
      "lv",
      "lt",
      "sr",
      "sq",
      "mk",
      "bs",
      "is",
      "mt",
      "hy",
      "az",
      "ka",
      "eu",
      "gl",
      "eu",
      "ca"
   ]
} as const

export type Locale = (typeof i18n)["locales"][number]