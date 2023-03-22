<script setup lang="ts">
/* eslint-disable */

import PostItemInfo from './PostItemInfo.vue';
import PostListItemCategories from './PostListItemCategories.vue';
import Post from '@/Types/Post';
import { PropType, computed, defineProps } from 'vue';

const props = defineProps({
    post: {
        type: Object as PropType<Post>,
        required: true,
    },

    isOnlyPost: {
        type: Boolean,
        required: false,
        default: false,
    },
    previewPost: {
        type: Boolean,
        required: false,
        default: false,
    },
})

const text = computed(() => {
    if (props.isOnlyPost) {
        return (props.post.body);
    }
    return props.post.summary;
});


</script>

<template>
    <div class="flex flex-col justify-center">
        <PostListItemCategories :category="post.category" />
        <h1 class="md:text-4xl text-2xl mt-3 text-center font-bold text-black">
            {{ post.title }}
        </h1>

        <PostItemInfo :created-at="post.created_at" :author="post.author" />

        <div class="text-start mt-5 font-normal text-xl blog-show" v-html="text">
        </div>
    </div>
</template>