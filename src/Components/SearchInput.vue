<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
    search: {
        type: String,
        required: true,
    },
});

defineEmits(['update:search']);

</script>

<template>
    <input type="text"
        class="w-full border-2 rounded-none border-gray-300 bg-white h-10 px-5 pr-16 focus:border-1 text-sm focus:outline-none" name="search"
        :value="search"
        @input="$emit('update:search', $event.target.value)"
        placeholder="Bir Şeyler Arayın" />
</template>
