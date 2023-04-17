<script setup lang="ts">

import {computed} from "vue";

const props = defineProps<{
    type: string | number,
    message: string,
}>();

let messageTitle = computed<string>(() => {
    switch (props.type) {
        case 'success': {
            return 'Sucesso!';
        }
        case 'warning': {
            return 'Alerta!';
        }
        case 'danger': {
            return 'Erro!';
        }
        case 'info': {
            return 'Aviso!';
        }
        default: {
            return 'Opps';
        }
    }
})

let messageColor = computed<string>(() => {
    switch (props.type) {
        case 'success': {
            return 'green';
        }
        case 'warning': {
            return 'orange';
        }
        case 'danger': {
            return 'red';
        }
        case 'info': {
            return 'blue';
        }
        default: {
            return 'gray';
        }
    }
})


</script>

<template>
    <div class="p-4 my-4 text-sm rounded-lg dark:bg-gray-800" role="alert"
         :class="[`text-${messageColor}-800`, `dark:text-${messageColor}-400`, `bg-${messageColor}-300`]">
        <span class="font-medium">{{ messageTitle }}</span> {{ message }}
    </div>
</template>

<style scoped>

</style>
