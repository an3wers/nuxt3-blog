<template>
  <div class="container">
    <h1 class="my-5">Auth</h1>
    <div class="row justify-content-center">
      <div class="col-6">
        <form @submit="onSubmit" id="form-auth">
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input
              v-model="email"
              type="email"
              id="email"
              @blur="emailBlur"
              :class="{ 'is-invalid': emailError }"
              class="form-control"
            />
            <div v-if="emailError" class="invalid-feedback">
              {{ emailError }}
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              v-model="password"
              type="password"
              @blur="passBlur"
              id="password"
              :class="{ 'is-invalid': passError }"
              class="form-control"
            />
            <div v-if="passError" class="invalid-feedback">{{ passError }}</div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

import {authStore} from '@/stores/auth'

import {useRouter} from 'vue-router'

const userStore = authStore()
const router = useRouter()

const { handleSubmit } = useForm();

// Валидация формы
const {value: email, errorMessage: emailError, handleBlur: emailBlur} = useField('email', yup.string().required().email())
const {value: password, errorMessage: passError, handleBlur: passBlur} = useField('password', yup.string().required().min(6))

// Авторизация пользователя
const onSubmit = handleSubmit( async(values) => {
        await userStore.authUser(values)
          .then(() => {
            router.push('/')
          })
    } );

</script>
