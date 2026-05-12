import type { Locale } from "./LocaleContext";
import type { Bilingual } from "@/types";

export function pick(obj: Bilingual, locale: Locale): string {
  return obj[locale];
}
