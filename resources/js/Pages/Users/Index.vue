<template>
    <app-layout :title="$t('All Users')">

        <template #header>
            {{ $t("All Users") }}
        </template>

        <div class="md:grid md:gap-6">
            <div class="m-5">

                <div class="container mt-1 grid grid-cols-1 gap-6 mx-auto bg-base-100 rounded">

                    <table class="table mb-5 table-zebra">
                        <thead>
                        <tr>
                            <th>{{ $t("Name") }}</th>
                            <th>{{ $t("Email") }}</th>
                            <th>{{ $t("Roles") }}</th>
                            <th>{{ $t("Created at") }}</th>
                            <th>{{ $t("Actions") }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="user in props.users.data" :key="user.id">
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.role }}</td>
                            <td>{{ user.created_at }}</td>
                            <td>
                                <div class="join">
                                    <Link class="btn join-item btn-primary"
                                          :href="route('users.show', user.id)">{{ $t('Show') }}
                                    </Link>
                                    <Link class="btn join-item btn-accent"
                                          :href="route('users.edit', user.id)">{{ $t('Edit') }}
                                    </Link>
                                    <button class="btn join-item btn-error" @click="deleteUser(user.id)">{{
                                            $t('Delete')
                                        }}
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <Pagination :links="props.users.meta.links" class="mb-4"/>

                </div>

            </div>
        </div>
    </app-layout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {defineProps} from 'vue';
import {Link, router} from '@inertiajs/vue3';
import {useForm} from '@inertiajs/vue3';
import Pagination from "@/CustomComponents/Pagination.vue";

const props = defineProps({
    users: {
        type: Object,
        required: true,
    },
});

const deleteForm = useForm({
    id: null,
});

const deleteUser = (id) => {
    deleteForm.id = id;
    deleteForm.delete(route('users.destroy', deleteForm.id));
}
</script>

<style scoped>

</style>
