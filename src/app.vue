<script setup lang="ts">
    const { t, setLocale } = useI18n()

    const toast = useToast()
    const store = useCounterStore()

    function doubleCount () {
        toast.add({
            detail: store.doubleCount.toString(),
            severity: "info",
            summary: t("it_is_value_of_double_count")
        })
    }
</script>

<template>
    <div class="flex min-h-screen w-screen flex-col items-center justify-center space-y-8">
        <Toast />
        <div class="flex items-center space-x-2">
            <Button label="English" @click="setLocale('en')" />
            <Button label="Português" @click="setLocale('ptBR')" />
            <Button label="Español" @click="setLocale('es')" />
        </div>
        <div class="flex flex-col items-center space-y-2">
            <h1 class="text-4xl font-bold">
                {{ $t("counter") }}
            </h1>
            <h2 class="text-2xl font-bold">
                {{ store.count }}
            </h2>
            <Button :label="t('increment')" @click="store.increment" />
            <Button :label="t('duplicate')" @click="doubleCount" />
        </div>
    </div>
</template>
