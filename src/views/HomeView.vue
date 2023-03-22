<script lang="ts" setup>
import PostsList from '@/Components/PostsList.vue';
import DefaultLayout from '@/Layouts/DefaultLayout.vue';
import posts from '../data/posts.json';

</script>

<template>
    <DefaultLayout title="Home">
        <div class="flex flex-col mt-4 divide-y">
           <PostsList :posts="posts" />
        </div>
    </DefaultLayout>
</template>