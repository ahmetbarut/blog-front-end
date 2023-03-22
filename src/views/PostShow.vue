<script setup lang="ts">
import PostListItem from '@/Components/PostListItem.vue';
import Defaultlayout from '@/Layouts/DefaultLayout.vue';
import Post from '@/Types/Post';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import posts from '../data/posts.json';

const route = useRoute();

const post = ref<Post>({} as Post)

onBeforeMount(() => {
    posts.forEach((p: Post) => {
        if (p.slug === route.params.slug) {
            post.value = p;
        }
    });
});

</script>

<template>
    <Defaultlayout>
        <PostListItem :post="post" :is-only-post="true" />
    </Defaultlayout>
</template>