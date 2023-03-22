<script setup lang="ts">
import PostListItem from './PostListItem.vue';
import type { Posts } from '@/Types/Posts';
import { PropType, defineProps } from 'vue';
import Post from '@/Types/Post';


defineProps({
    posts: {
        type: Object as PropType<Posts>,
        required: true,
    },
});

</script>

<template>
    <div class=" mt-8 first:m-0" v-for="post in posts" :key="post.slug">
        <router-link :to="{name: 'post.show', params: {
            'slug': post.slug
        }}">
            <PostListItem :post="post as Post" />
        </router-link>
    </div>
</template>