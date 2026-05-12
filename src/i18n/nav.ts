import type { DictionaryKey } from "./dictionaries/es";

export const NAV = [
  { id: "about",      key: "nav.about"      as DictionaryKey },
  { id: "experience", key: "nav.experience" as DictionaryKey },
  { id: "projects",   key: "nav.projects"   as DictionaryKey },
  { id: "skills",     key: "nav.skills"     as DictionaryKey },
  { id: "contact",    key: "nav.contact"    as DictionaryKey },
] as const;

export type NavId = typeof NAV[number]["id"];
