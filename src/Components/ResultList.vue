<script setup lang="ts">
/* eslint-disable */

import ResultListItem from '@/Components/ResultListItem.vue';
import Post from '@/Types/Post';
import { PropType, defineProps, ref } from 'vue';

// const showResultList = ref<boolean>(false);

const props = defineProps({
    results: {
        type: Array as PropType<Post[]>,
        required: true,
    },
    showResultList: {
        type: Boolean,
        required: false,
        default: false,
    },
});

const emit = defineEmits(['go-post']);

const emmitedPost = () => {
    emit('go-post');
}

</script>

<template>
    <div :class="{ 'hidden': showResultList === false }"
        class="absolute w-full bg-white md:bg-none rounded h-64 p-0 top-10 shadow-lg z-50">
        <div class="absolute w-full bg-white rounded overflow-y-scroll h-64 p-3 top-0 shadow-lg">
            <ul role="list" class="flex flex-col divide-y divide-slate-200">
                <ResultListItem @go-post="emmitedPost" :result="result as Post" v-for="result in results"
                    :key="result.id" />
            </ul>
        </div>
    </div>
</template>