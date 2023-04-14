<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {Head, Link, useForm} from '@inertiajs/vue3';
import InputSelect from "@/Components/InputSelect.vue";

defineProps<{
    userTypes: Object
}>();

const form = useForm({
    name: '',
    type: '',
    document: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register.store'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation')
        },
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Cadastrar-se"/>
        <form @submit.prevent="submit">
            <div>
                <InputLabel for="name" value="Nome"/>

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.name"/>
            </div>

            <div class="mt-4">
                <InputLabel for="type" value="Eu sou"/>

                <InputSelect
                    id="type"
                    class="mt-1 block w-full"
                    :options="userTypes"
                    v-model="form.type"
                    required
                />

                <InputError class="mt-2" :message="form.errors.type"/>
            </div>

            <div class="mt-4" v-show="form.type">
                <InputLabel for="document" :value="form.type == 1 ? 'CPF' : 'CNPJ'"/>

                <TextInput
                    id="document"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.document"
                    v-mask="form.type == 1 ? '###.###.###-##' : '##.###.###/####-##' "
                    required
                    autocomplete="document"
                />

                <InputError class="mt-2" :message="form.errors.document"/>
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email"/>

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email"/>
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Senha"/>

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                />

                <InputError class="mt-2" :message="form.errors.password"/>
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirme sua Senha"/>

                <TextInput
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />

                <InputError class="mt-2" :message="form.errors.password_confirmation"/>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    :href="route('login.index')"
                    class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                    Já registrado?
                </Link>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Cadastrar-se
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
