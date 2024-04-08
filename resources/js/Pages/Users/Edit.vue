<template>
    <app-layout :title="$t('Edit User')">

        <template #header>
            {{ $t("Edit User") }}
        </template>

        <div class="card m-5 w-96 bg-base-100 shadow-xl mx-auto">
            <div class="card-body">
                <h2 class="card-title">
                    {{ user.name }}
                    <div class="badge badge-secondary">{{ user.role }}</div>
                </h2>

                <form @submit.prevent="submit">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">{{ $t('Role') }}</span>
                        </label>
                        <select class="select select-bordered w-full" v-model.trim="userForm.role">
                            <option disabled="disabled" value="">{{ $t('Select role') }}</option>
                            <option value="admin">{{ $t('Admin') }}</option>
                            <option value="user">{{ $t('User') }}</option>
                        </select>
                    </div>


                    <div class="mt-4 card-actions">

                        <button type="submit" class="btn btn-primary">{{ $t('Update') }}</button>
                        <button type="button" class="btn btn-error" @click="deleteUser">{{ $t('Delete') }}</button>

                    </div>

                </form>
            </div>


        </div>
    </app-layout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {useForm} from '@inertiajs/vue3';
import Form from "@/Pages/ObservationSpots/Form.vue";

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

const userForm = useForm({
    id: props.user.id,
    role: props.user.role,
});

function submit() {

    userForm
        .transform((data) => ({
            ...data,
            _method: 'PUT',// Read the issue for more details: https://bugs.php.net/bug.php?id=55815
        }))
        .post(route('users.update', userForm.id), {
            role: userForm.role,
        });
}


const deleteUser = () => {
    userForm.delete(route('users.destroy', userForm.id));
}
</script>
