<script lang="ts" setup>
import Defaultlayout from '@/Layouts/DefaultLayout.vue';

</script>

<template>
    <Defaultlayout title="İletişim">
        <div class="">
            <h1 class="text-3xl font-bold text-center">İletişim</h1>
            <p class="text-xl text-center">
                Bu formu doldurarak bana ulaşabilirsiniz veya bu kanallardan bana ulaşabilirsiniz.
            </p>

            <div class="flex p-6">
                <div class="w-3/4 order-1">
                    <form action="" method="post">
                        <div class="flex flex-col">
                            <label for="name">Adınız</label>
                            <input type="text" name="name" id="name" class="border border-gray-300 p-2 rounded">
                        </div>
                        <div class="flex flex-col">
                            <label for="email">E-posta adresiniz</label>
                            <input type="email" name="email" id="email" class="border border-gray-300 p-2 rounded">
                        </div>
                        <div class="flex flex-col">
                            <label for="message">Mesajınız</label>
                            <textarea name="message" id="message" cols="30" rows="10" class="border border-gray-300 p-2 rounded"></textarea>
                        </div>
                        <div class="flex justify-end">
                            <button type="submit" class="bg-blue-500 text-white p-2 rounded">Gönder</button>
                        </div>
                    </form>
                </div>
                <div class="w-1/4">
                    <div class="flex flex-col">
                        <div class="flex">
                            <div class="w-1/2">
                                <h2 class="text-xl font-bold">İletişim Bilgilerim</h2>
                            </div>
                            <div class="w-1/2">
                                <h2 class="text-xl font-bold">Sosyal Medya Hesaplarım</h2>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-1/2">
                                <ul>
                                    <li>
                                        <a href="mailto:ax@sf.co" class="text-blue-500">
                                            ax@sf.co
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+905555555555" class="text-blue-500">
                                            +905555555555
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/axsfco" class="text-blue-500">
                                            @axsfco
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Defaultlayout>
</template>