<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import Author from '@/Types/Author';

defineProps({
    author: {
        type: Object as PropType<Author>,
        required: true,
    },
    
    createdAt: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="flex justify-center mt-5">
        <div class="flex justify-between w-full md:w-3/4 lg:w-1/2">
            <span class="md:text-sm flex md:leading-8 leading-6 font-normal text-gray-400">
                <svg class="h-6 w-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    </defs>
                    <title />
                    <g data-name="Layer 7" id="Layer_7">
                        <path style="fill:#606161"
                            d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z" />
                    </g>
                </svg>
                <a href="#" class="font-semibold">{{ author.name }}</a>
            </span>
            <span class="md:text-sm flex md:leading-8 leading-6 font-normal text-gray-400">
                <svg class="h-6 w-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-3.8 -3.8 36.84 36.84" xml:space="preserve"
                    fill="#9f9393" stroke="#9f9393" stroke-width="0.00029237" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path style="fill:#9ca3af;"
                                    d="M7.685,24.819H8.28v-2.131h3.688v2.131h0.596v-2.131h3.862v2.131h0.597v-2.131h4.109v2.131h0.595 v-2.131h3.417v-0.594h-3.417v-3.861h3.417v-0.596h-3.417v-3.519h3.417v-0.594h-3.417v-2.377h-0.595v2.377h-4.109v-2.377h-0.597 v2.377h-3.862v-2.377h-0.596v2.377H8.279v-2.377H7.685v2.377H3.747v0.594h3.938v3.519H3.747v0.596h3.938v3.861H3.747v0.594h3.938 V24.819z M12.563,22.094v-3.861h3.862v3.861H12.563z M21.132,22.094h-4.109v-3.861h4.109V22.094z M21.132,14.118v3.519h-4.109 v-3.519C17.023,14.119,21.132,14.119,21.132,14.118z M16.426,14.118v3.519h-3.862v-3.519 C12.564,14.119,16.426,14.119,16.426,14.118z M8.279,14.118h3.688v3.519H8.279V14.118z M8.279,18.233h3.688v3.861H8.279V18.233z">
                                </path>
                                <path style="fill:#9ca3af;"
                                    d="M29.207,2.504l-4.129,0.004L24.475,2.51v2.448c0,0.653-0.534,1.187-1.188,1.187h-1.388 c-0.656,0-1.188-0.533-1.188-1.187V2.514l-1.583,0.002v2.442c0,0.653-0.535,1.187-1.191,1.187h-1.388 c-0.655,0-1.188-0.533-1.188-1.187V2.517l-1.682,0.004v2.438c0,0.653-0.534,1.187-1.189,1.187h-1.389 c-0.653,0-1.188-0.533-1.188-1.187V2.525H8.181v2.434c0,0.653-0.533,1.187-1.188,1.187H5.605c-0.656,0-1.189-0.533-1.189-1.187 V2.53L0,2.534v26.153h2.09h25.06l2.087-0.006L29.207,2.504z M27.15,26.606H2.09V9.897h25.06V26.606z">
                                </path>
                                <path style="fill:#9ca3af;"
                                    d="M5.605,5.303h1.388c0.163,0,0.296-0.133,0.296-0.297v-4.16c0-0.165-0.133-0.297-0.296-0.297H5.605 c-0.165,0-0.298,0.132-0.298,0.297v4.16C5.307,5.17,5.44,5.303,5.605,5.303z">
                                </path>
                                <path style="fill:#9ca3af;"
                                    d="M11.101,5.303h1.389c0.164,0,0.297-0.133,0.297-0.297v-4.16c-0.001-0.165-0.134-0.297-0.298-0.297 H11.1c-0.163,0-0.296,0.132-0.296,0.297v4.16C10.805,5.17,10.938,5.303,11.101,5.303z">
                                </path>
                                <path style="fill:#9ca3af;"
                                    d="M16.549,5.303h1.388c0.166,0,0.299-0.133,0.299-0.297v-4.16c-0.001-0.165-0.133-0.297-0.299-0.297 h-1.388c-0.164,0-0.297,0.132-0.297,0.297v4.16C16.252,5.17,16.385,5.303,16.549,5.303z">
                                </path>
                                <path style="fill:#9ca3af;"
                                    d="M21.899,5.303h1.388c0.164,0,0.296-0.133,0.296-0.297v-4.16c0-0.165-0.132-0.297-0.296-0.297 h-1.388c-0.164,0-0.297,0.132-0.297,0.297v4.16C21.603,5.17,21.735,5.303,21.899,5.303z">
                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
                <a href="#" class="font-semibold">{{ createdAt }}</a>
            </span>
        </div>
    </div>
</template>