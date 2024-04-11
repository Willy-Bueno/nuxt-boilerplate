import en from "@/i18n/lang/en"
import es from "@/i18n/lang/es"
import ptBR from "@/i18n/lang/pt-br"

export default defineI18nConfig(() => ({
    legacy: false,
    messages: { en, es, ptBR }
}))
