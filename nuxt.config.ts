import path from "node:path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: "src",
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-primevue",
        "@pinia/nuxt",
        "@nuxtjs/i18n"
    ],
    primevue: {
        options: {
            unstyled: true
        },
        importPT: { from: path.resolve(__dirname, "src/presets/lara/") } // import and apply preset
    },
    i18n: {
        strategy: "no_prefix",
        defaultLocale: "ptBR",
        vueI18n: path.resolve(__dirname, "src/i18n/config/i18n.config.ts")
    }
})
