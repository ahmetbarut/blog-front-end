<script setup lang="ts">
// import { isActive } from '@/Helpers';
import ResultList from '@/Components/ResultList.vue';
import SearchInput from '@/Components/SearchInput.vue';
import { ref, defineProps } from 'vue';
import Post from '@/Types/Post';
import posts from '../data/posts.json';

defineProps({
    openMobileMenu: {
        type: Boolean,
        required: true,
    },
});
const search = ref<String>("");
const searchResult = ref<Array<Post>>([]);
const showResultList = ref<Boolean>(false);

const handleEscape = () => {
    showResultList.value = false;
};

const handleSearch = (search: String) => {
    posts.forEach((post: Post) => {
        if (post.title.toLowerCase().includes(search.toLowerCase())) {
            searchResult.value.push(post);
        }
    });

    if (searchResult.value.length > 0) {
        showResultList.value = true;
    } else {
        showResultList.value = false;
    }
};

const handleGoPost = () => {
    showResultList.value = false;
};
</script>

<template>
    <div :class="{ 'hidden md:flex': !openMobileMenu }" @keyup.esc="handleEscape"
        class="absolute md:relative flex flex-col md:flex-row w-3/4 top-16 right-0 md:justify-between md:top-0 bg-white md:bg-transparent p-3 md:p-0 shadow-lg md:shadow-none border border-black/10 md:border-0">
        <div class="w-full md:w-1/2 md:flex relative order-1 md:order-0 self-center">
            <SearchInput :search="search" @update:search="handleSearch" />
            <ResultList :results="searchResult" :show-result-list="(showResultList as Boolean)" @go-post="handleGoPost" />
        </div>
        <nav class="w-full md:w-1/4 flex flex-col md:flex-row justify-end self-center order-0 md:order-1">
            <a target="_blank"
                class="text-pink-600 text-lg border-b-2 border-transparent hover:border-b-white mt-4 font-medium lg:inline-block lg:mt-0 mr-4"
                href="https://github.com/ahmetbarut">Github</a>
            <a target="_blank"
                class="text-pink-600 text-lg border-b-2 border-transparent hover:border-b-white mt-4 font-medium lg:inline-block lg:mt-0 mr-4"
                href="https://twitter.com/baruta_">Twitter
            </a>
            <a target="_blank"
                class="text-pink-600 text-lg border-b-2 border-transparent hover:border-b-white mt-4 font-medium lg:inline-block lg:mt-0 mr-4"
                href="/https://instagram.com/ahmetbarut.1">Instagram
            </a>
            <a target="_blank"
                class="text-pink-600 text-lg border-b-2 border-transparent hover:border-b-white mt-4 font-medium lg:inline-block lg:mt-0 mr-4"
                href="https://linkedin.com/in/ahmetbarut">Linkedin
            </a>
        </nav>
    </div>
</template>