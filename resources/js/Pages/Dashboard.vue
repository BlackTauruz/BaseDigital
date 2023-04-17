<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, useForm, Link} from '@inertiajs/vue3';
import {WalletTransaction} from "@/types";
import {ref} from "vue";
import Modal from "@/Components/Modal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import MoneyInput from "@/Components/MoneyInput.vue";
import TextInput from "@/Components/TextInput.vue";

defineProps<{
    transactions: Array<WalletTransaction>
}>()

const depositModal = ref(false);
const transferModal = ref(false);

const depositForm = useForm({
    amount: '',
});

const transferForm = useForm({
    document: '',
    amount: '',
    password: ''
});

const showDepositModal = () => {
    depositModal.value = true;
};
const showTransferModal = () => {
    transferModal.value = true;
};

const closeDepositModal = () => {
    depositModal.value = false;

    depositForm.reset();
};

const closeTransferModal = () => {
    transferModal.value = false;

    transferForm.reset();
};

const deposit = () => {
    depositForm.post(route('deposit'), {
        preserveScroll: true,
        onSuccess: () => {
            closeDepositModal()
        },
        onFinish: () => {
            depositForm.reset()
        },
    });
}

const transfer = () => {
    transferForm.post(route('transfer'), {
        preserveScroll: true,
        onSuccess: () => {
            closeTransferModal()
        },
        onFinish: () => {
            // transferForm.reset()
        },
    });
}

</script>

<template>
    <Head title="Dashboard"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>
        </template>
        <div class="py-12 max-w-7xl mx-auto flex">
            <div class="sm:px-6 lg:px-8"
                 :class="{'w-full': $page.props.auth.isShopkeeper, 'w-2/3': $page.props.auth.isUser}">

                <div
                    class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Transações</h5>
                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li v-if="transactions.length > 0" v-for="transaction in transactions" :key='transaction.id'
                                class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <svg v-if="transaction.description == 1"
                                             class="w-5 h-5 text-gray-400 dark:text-white"
                                             fill="none"
                                             stroke="currentColor"
                                             stroke-width="1.5"
                                             viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path>
                                        </svg>
                                        <svg
                                            v-if="transaction.description == 2 && transaction.from_id == $page.props.auth.user.wallet.id"
                                            class="w-5 h-5 text-gray-400 dark:text-white"
                                            fill="none"
                                            stroke="currentColor" stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                                        </svg>
                                        <svg
                                            v-if="transaction.description == 2 && transaction.from_id != $page.props.auth.user.wallet.id"
                                            class="w-5 h-5 text-gray-400 dark:text-white" fill="none"
                                            stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-1 min-w-0"
                                         :class="{'line-through': transaction.refunded_at}">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {{
                                                transaction.description == 1 ? 'Depósito' : (transaction.from_id == $page.props.auth.user.wallet.id ? 'Tranferência Recebida' : 'Transferência Feita')
                                            }}
                                            <Link
                                                v-if="transaction.from_id == $page.props.auth.user.wallet.id && !transaction.refunded_at"
                                                :href="route('refund', {transaction: transaction.id})"
                                                as="button"
                                                method="post"
                                                class="pointer text-sm text-blue-500 truncate dark:text-blue-400">
                                                Reembolsar
                                            </Link>
                                        </p>
                                        <p v-if="transaction.description == 2"
                                           class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {{
                                                transaction.from_id == $page.props.auth.user.wallet.id ? `De: ${transaction.wallet.user.name}` : `Para: ${transaction.reference.user.name}`
                                            }}
                                        </p>
                                    </div>
                                    <div class="inline-flex">
                                        <div class="text-end"
                                             :class="{'line-through': transaction.refunded_at}">
                                            <p class="font-semibold text-gray-900 dark:text-white">
                                                R$ {{ transaction.difference }}
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {{ transaction.created_at }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li v-else>
                                <div
                                    class="flex p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                                    role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3"
                                         fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="sr-only">Info</span>
                                    <div>
                                        <span class="font-medium">Oopps!</span> Ainda não há nenhuma transação na sua
                                        carteira!
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-1/3 sm:px-6 lg:px-8">
                <div
                    class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between">
                    <div class="p-6 text-gray-900 dark:text-gray-100">Saldo Atual:</div>
                    <p class="p-6 font-semibold text-gray-900 dark:text-white text-end flex items-center">
                        R$ {{ $page.props.auth.user.wallet.balance }}
                    </p>
                </div>
                <div v-if="$page.props.auth.isUser"
                     class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between mt-4">
                    <div class="p-6 text-gray-900 dark:text-gray-100">Depositar</div>
                    <button type="button" @click="showDepositModal"
                            class="p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center m-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                        </svg>
                        <span class="sr-only">Depositar</span>
                    </button>
                </div>
                <div v-if="$page.props.auth.isUser"
                     class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between mt-4">
                    <div class="p-6 text-gray-900 dark:text-gray-100">Nova Transação</div>
                    <button type="button" @click="showTransferModal"
                            class="p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center m-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"></path>
                        </svg>
                        <span class="sr-only">Nova Transação</span>
                    </button>
                </div>
            </div>
        </div>
        <Modal :show="depositModal" @close="closeDepositModal">
            <div class="p-6 text-center">
                <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Depositar
                </h2>

                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Informe a quantia desejada para fazer o deposito.
                </p>

                <div class="mt-6">
                    <InputLabel for="amount" value="Valor" class="sr-only"/>

                    <MoneyInput
                        id="amount"
                        v-model="depositForm.amount"
                        class="mt-1 w-2/4"
                        placeholder="Quantia"
                    />

                    <InputError :message="depositForm.errors.amount" class="mt-2"/>
                </div>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeDepositModal"> Cancelar</SecondaryButton>

                    <PrimaryButton
                        class="ml-3"
                        :class="{ 'opacity-25': depositForm.processing }"
                        :disabled="depositForm.processing"
                        @click="deposit"
                    >
                        Depositar
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
        <Modal :show="transferModal" @close="closeTransferModal">
            <div class="p-6 text-center">
                <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Transferir
                </h2>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Preencha o formulário abaixo para realizar a transferência.
                </p>

                <div class="text-center">
                    <div class="mt-6">
                        <InputLabel for="document" value="Documento do Destinatário"/>

                        <TextInput
                            id="document"
                            type="text"
                            v-model="transferForm.document"
                            class="mt-1 w-3/4"
                            placeholder="Documento"
                            v-mask="['###.###.###-##', '##.###.###/####-##']"
                        />

                        <InputError :message="transferForm.errors.document" class="mt-2"/>
                    </div>
                    <div class="mt-6">
                        <InputLabel for="amount" value="Valor"/>

                        <MoneyInput
                            id="amount"
                            ref="depositInput"
                            v-model="transferForm.amount"
                            class="mt-1 w-3/4"
                            placeholder="Quantia"
                        />

                        <InputError :message="transferForm.errors.amount" class="mt-2"/>
                    </div>
                    <div class="mt-6">
                        <InputLabel for="password" value="Senha"/>

                        <TextInput
                            id="password"
                            type="password"
                            class="mt-1 w-3/4"
                            v-model="transferForm.password"
                            required
                            autocomplete="current-password"
                            placeholder="Senha"
                        />

                        <InputError class="mt-2" :message="transferForm.errors.password"/>
                    </div>
                </div>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeTransferModal"> Cancelar</SecondaryButton>

                    <PrimaryButton
                        class="ml-3"
                        :class="{ 'opacity-25': transferForm.processing }"
                        :disabled="transferForm.processing"
                        @click="transfer"
                    >
                        Transferir
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
    </AuthenticatedLayout>
</template>
