<script setup lang="ts">
import AppLogo from '@/Components/AppLogo.vue';
import FooterComponent from '@/Components/FooterComponent.vue';
import HeaderMenu from '@/Components/HeaderMenu.vue';
import { ref, defineProps, defineEmits } from 'vue';

const openMobileMenu = ref(false);
// const escapePressed = ref(false);

defineProps({
    title: {
        type: String,
        required: false,
    },
});

defineEmits(['escapePressed']);

const toggleMobileMenu = () => {
    openMobileMenu.value = !openMobileMenu.value;
};



</script>
<template>
    <meta property="og:site_name" content="Ahmet Barut Kişisel Blog" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@baruta_" />
    <meta name="twitter:creator" content="@baruta_" />
    <meta name="twitter:domain" content="https://ahmetbarut.com" />
    <meta name="twitter:image:alt" content="Ahmet Barut Kişisel Blog" />
    <slot name="head">
        <title>{{ title }}</title>
    </slot>
    <section class="flex flex-col h-screen justify-between">
        <header class="flex p-0 md:p-10 h-20 items-center justify-center bg-black/90">
            <div class="flex p-2 md:p-0 w-full md:w-11/12 md:justify-between relative">
                <div class="flex justify-between w-full md:flex-none md:w-64 self-center">
                    <AppLogo class="text-white" />
                    <button class="pr-2 block md:hidden" @click="toggleMobileMenu">
                        <svg class="w-8 h-8 text-center text-white" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <HeaderMenu :open-mobile-menu="openMobileMenu" />
            </div>
        </header>

        <main class="md:w-3/5 md:mx-auto h-auto">
            <div class="p-4">
                <slot />
            </div>
        </main>

        <FooterComponent />
    </section>
</template>
