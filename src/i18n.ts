export type Language = "en" | "ru";

export const ui = {
  en: {
    home: "/en",
    alternateHome: "/",
    languageLabel: "Language",
    headerTitle: "Michael Lazebny · favorite poems",
    title: ["Michael Lazebny’s", "favorite poems."],
    archive: "Browse the archive",
    authors: "Authors",
    poems: "Poems",
    searchLabel: "Search poems",
    searchPlaceholder: "Title, author, a remembered line…",
    all: "All",
    noResults: "No pieces match this search.",
    clear: "Clear filters",
    collection: "← The collection",
    why: "Why I kept this",
    tags: "Tags",
    originalLanguage: "Original language",
    anyLanguage: "Any language",
    source: "Original source",
    keepReading: "Keep reading",
    browse: "Browse all pieces",
    backTop: "Back to top ↑",
    returnLabel: "Return to collection",
    description: "A quiet archive of poems and pieces worth returning to.",
  },
  ru: {
    home: "/",
    alternateHome: "/en",
    languageLabel: "Язык",
    headerTitle: "Михаил Лазебный · любимые стихи",
    title: ["Любимые стихи", "Михаила Лазебного."],
    archive: "Архив",
    authors: "Авторы",
    poems: "Стихи",
    searchLabel: "Искать произведения",
    searchPlaceholder: "Название, автор, знакомая строка…",
    all: "Все",
    noResults: "Ничего не найдено.",
    clear: "Сбросить фильтры",
    collection: "← К архиву",
    why: "Почему я сохранил это",
    tags: "Теги",
    originalLanguage: "Язык оригинала",
    anyLanguage: "Любой язык",
    source: "Источник",
    keepReading: "Читать дальше",
    browse: "Все произведения",
    backTop: "Наверх ↑",
    returnLabel: "Вернуться к архиву",
    description: "Личный архив стихов и текстов, к которым хочется возвращаться.",
  },
} as const;

const tagLabels: Record<string, Record<Language, string>> = {
  hope: { en: "hope", ru: "надежда" },
  nature: { en: "nature", ru: "природа" },
  resilience: { en: "resilience", ru: "стойкость" },
  love: { en: "love", ru: "любовь" },
  darkness: { en: "darkness", ru: "тьма" },
  memory: { en: "memory", ru: "память" },
  longing: { en: "longing", ru: "тоска" },
  dreams: { en: "dreams", ru: "сны" },
  solitude: { en: "solitude", ru: "одиночество" },
  eternity: { en: "eternity", ru: "вечность" },
  given: { en: "the given", ru: "данность" },
};

export function tagLabel(language: Language, tag: string) {
  return tagLabels[tag]?.[language] ?? tag;
}

export function languageName(interfaceLanguage: Language, poemLanguage: Language) {
  if (interfaceLanguage === "ru") return poemLanguage === "ru" ? "Русский" : "Английский";
  return poemLanguage === "ru" ? "Russian" : "English";
}

export function pieceLabel(language: Language, count: number) {
  if (language === "en") return count === 1 ? "piece" : "pieces";
  const lastTwo = count % 100;
  const last = count % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return "произведений";
  if (last === 1) return "произведение";
  if (last >= 2 && last <= 4) return "произведения";
  return "произведений";
}
