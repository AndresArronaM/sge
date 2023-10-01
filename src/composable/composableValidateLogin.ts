import { z } from 'zod'
import { ref } from 'vue'
import type { InterfacesErrorLogin, InterfacesLogin } from '@/interfaces/InterfacesLogin'

const loginShema = z.object({
  user: z.string(),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres')
})

export const userLoginForm = () => {
  const account: InterfacesLogin = ref({
    email: null,
    password: null,
    session: false
  })

  const loginErrors = ref<InterfacesErrorLogin>({})

  const submitForm = () => {
    try {
      const validatedData = loginShema.parse(account.value)
      console.log('Datos Validos', validatedData)
    } catch (error) {
      if (error.formErrors) {
        loginErrors.value = error.formErrors.fieldErrors
      }
    }
  }

  return {
    account,
    loginErrors,
    submitForm
  }
}


