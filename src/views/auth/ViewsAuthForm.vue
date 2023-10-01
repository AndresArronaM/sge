<script setup lang="ts">
import {defineAsyncComponent, onMounted, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const LayoutsAuth = defineAsyncComponent(() =>
  import('@/layouts/LayoutsAuth.vue')
)

const ModulesLogin = defineAsyncComponent(() =>
  import('@/modules/ModulesLogin.vue')
)

const ModulesRecoverAccount = defineAsyncComponent(() =>
  import('@/modules/ModulesRecoverAccount.vue')
)

const PvButton = defineAsyncComponent(() =>
  import('primevue/button')
)

const Card = defineAsyncComponent(() =>
  import('primevue/card')
)

const url = ref('Login')

const auth = ref({
  title: 'Iniciar Sesion',
  component: ModulesLogin,
})

onMounted(() => {
  if (url.value === 'Login') {
    auth.value = {
      title: 'Iniciar Sesion',
      component: ModulesLogin
    }
  } else if (url.value === 'RecoverAccount') {
    auth.value = {
      title: 'Recuperar Cuenta',
      component: ModulesRecoverAcount
    }
  }
})
</script>

<template>
  <LayoutsAuth>
    <template #body>
      <section class="sge-form">
        <div class="p-buttonset">
          <PvButton
            label="Iniciar Sesion"
            :pt="{
              root: {
                class: 'sge-btn sge-primary'
              }
            }"
          >
            <template #icon>
              <FontAwesomeIcon :icon="['fas', 'right-to-bracket']"/>
            </template>
          </PvButton>
          <PvButton
            label="Recuperar Cuenta"
            :pt="{
              root: {
                class: 'sge-btn sge-primary-alt'
              }
            }"
          >
            <template #icon>
              <FontAwesomeIcon :icon="['fas', 'key']"/>
            </template>
          </PvButton>
        </div>
        <Card
          :pt="{
              root: {
                class: 'sge-card-root'
              },
              content: {
                class: 'sge-card-content'
              }
            }"
        >
          <template #header>

          </template>
          <template #title>
            <h1 class="sge-card-title" >Sistema de Gestion Escolar</h1>
          </template>
          <template #subtitle>
            <h2 class="sge-card-subtitle">{{auth.title}}</h2>
          </template>
          <template #content>
            <KeepAlive>
              <component :is="auth.component"/>
            </KeepAlive>
          </template>
        </Card>
      </section>
    </template>
  </LayoutsAuth>
</template>

<style scoped>

</style>

