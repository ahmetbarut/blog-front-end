<script setup lang="ts">
import Post from '@/Types/Post';
import { defineProps, PropType, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
    result: {
        type: Object as PropType<Post>,
        required: true,
    },
});

const emit = defineEmits(['goPost']);

const goPost = (slug: string) => {
    router.push({ name: 'post.show', params: { slug } });
    emit('goPost', slug);
};
</script>

<template>
    <li class="first:pt-0 last:pb-0 hover:bg-red-400 hover:cursor-pointer transition group">
        <div @click="goPost(result.slug)">
            <div class="m-2">
                <h1 class="text-sm font-medium text-slate-900 group-hover:text-white">
                    {{ result.title }} <span class="text-sm italic text-pink-600">{{ result.category.name }}</span>
                </h1>
                <p class="text-sm text-slate-500 truncate group-hover:text-white" v-html="result.body.substring(0, 120)">
                </p>
            </div>
        </div>
    </li>
</template>