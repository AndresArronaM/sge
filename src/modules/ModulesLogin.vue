<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { userLoginForm } from '@/composable/composableValidateLogin'

const PvButton = defineAsyncComponent(() =>
  import('primevue/button')
)

const InputText = defineAsyncComponent(() =>
  import('primevue/inputtext')
)

const Password = defineAsyncComponent(() =>
  import('primevue/password')
)

const Divider = defineAsyncComponent(() =>
  import('primevue/divider')
)

const Checkbox = defineAsyncComponent(() =>
  import('primevue/checkbox')
)

const {
  account,
  loginErrors,
  submitForm
} = userLoginForm()
</script>

<template>
  <div class="sge-form-container">
    <div class="sge-form-item">
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
          <FontAwesomeIcon :icon="['fas', 'user']"/>
        </span>
        <span class="p-float-label">
          <InputText
            v-model="account.user"
            id="cuenta"
            placeholder="Cuenta"
            aria-description="cuenta-help"
          />
          <label for="cuenta">Cuenta</label>
        </span>
      </div>
      <small>Ingrese su cuenta</small>
    </div>
    <div class="sge-form-item">
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
          <FontAwesomeIcon :icon="['fas', 'lock']"/>
        </span>
        <span class="p-float-label">
        <Password
          class="tw-w-full"
          v-model="account.password"
          :toggleMask="true"
          inputId="password"
          placeholder="Contraseña"
          weakLabel="Debil"
          mediumLabel="Fuerte"
          strongLabel="Segura"
          :required=true
        >
          <template #footer>
            <Divider />
            <p class="mt-2">Sugerencia</p>
            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
              <li>Tener al menos una minuscula</li>
              <li>Tener al menos una mayuscula</li>
              <li>Tener al menos un numero</li>
              <li>Tenen Minimo 8 caracteres</li>
            </ul>
          </template>
        </Password>
        <label for="password">Contraseña</label>
      </span>
      </div>
      <small>Ingrese su contraseña</small>
    </div>
    <div class="sge-form-item sge-form-item_alt">
      <span class="sge-form-checkbox">
        <Checkbox
          v-model="account.sesion"
          :binary="true"
        />
        <label for="sesion">Recordar contraseña</label>
      </span>
    </div>
  </div>
  <div class="p-buttonset">
    <PvButton
      label="Cancelar"
      :pt="{
         root: {
           class: 'sge-btn sge-second-alt'
         }
       }"
    >
      <template #icon>
        <FontAwesomeIcon :icon="['fas', 'ban']"/>
      </template>
    </PvButton>
    <PvButton
      label="Iniciar Sesion"
      @click="submitForm"
      :pt="{
         root: {
           class: 'sge-btn sge-second'
         }
       }"
    >
      <template #icon>
        <FontAwesomeIcon :icon="['fas', 'right-to-bracket']"/>
      </template>
    </PvButton>
  </div>
</template>

<style scoped>

</style>
