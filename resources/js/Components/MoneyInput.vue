<script setup lang="ts">
// @ts-ignore
import {Money3Component} from "v-money3";
import {defineComponent} from 'vue';

defineComponent({
    Money3Component
})

const config = {
    masked: false,
    prefix: '',
    suffix: '',
    thousands: '.',
    decimal: ',',
    precision: 2,
    disableNegative: true,
    disabled: false,
    min: null,
    max: null,
    allowBlank: false,
    minimumNumberOfCharacters: 0,
    shouldRound: true,
    focusOnRight: false,
}

</script>

<template>
    <Money3Component
        class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
        v-bind="config"
    />
</template>

