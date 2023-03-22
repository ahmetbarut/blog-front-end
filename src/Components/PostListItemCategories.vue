<script setup lang="ts">
import Category from '@/Types/Category';
import { PropType, defineProps } from 'vue';


defineProps({
    category: {
        type: Object as PropType<Category>,
        required: true,
    },
})

</script>

<template>
    <h2 class="text-xl text-center divide-solid divide-x divide-pink-600 font-bold text-pink-600">
        <a href="#">
            &nbsp;{{ category.name }}
        </a>
    </h2>
</template>