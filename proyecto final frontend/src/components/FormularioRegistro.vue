<script>
import { reactive, computed } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, sameAs } from '@vuelidate/validators';
export default {

  name: 'FormularioRegistro',
  setup(){
    const formulario = reactive({
      nombre: '',
      email: '',
      contraseña: {
        contraseña: '',
        confirmar: ''
      }
    })
    
    const validaciones = computed(() => {
      return {
        nombre: {required},
        email: {required, email},
        contraseña: {
          contraseña: {required},
          confirmar: {required, sameAs: sameAs(formulario.contraseña.contraseña)}
        }
      }
    })
    const v$ = useVuelidate(validaciones, formulario)

    return {
      v$,
      formulario
    }
  },
  methods: {
    validarFormulario(){
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('El registro se ha realizado correctamente.')
      }
      else {
        alert('Se ha detectado un error en el formulario.')
      }
    }
  }
}
</script>

<template>
  <body class="container mt-5 text-center">
    <div class="card" style="width: 40rem; margin:auto">
      <form style="margin: 2rem">
        <div class="form-group" style="margin: 2rem">
          <label for="nombre">Nombre</label>
          <input v-model="formulario.nombre" type="text" class="form-control" id="nombre">
          <span v-if="v$.nombre.$error">
            {{ v$.nombre.$errors[0].$message }}
          </span>
        </div>
        <div class="form-group" style="margin: 2rem">
          <label for="correo">Correo</label>
          <input v-model="formulario.email" type="email" class="form-control" id="correo">
          <span v-if="v$.email.$error">
            {{ v$.email.$errors[0].$message }}
          </span>
        </div>
        <div class="form-group" style="margin: 2rem">
          <label for="contrasena">Contraseña</label>
          <input v-model="formulario.contraseña.contraseña" type="password" class="form-control" id="contrasena">
          <span v-if="v$.contraseña.contraseña.$error">
            {{ v$.contraseña.contraseña.$errors[0].$message }}
          </span>
        </div>
        <div class="form-group" style="margin: 2rem">
          <label for="contrasena2">Repetir Contraseña</label>
          <input v-model="formulario.contraseña.confirmar" type="password" class="form-control" id="contrasena2">
          <span v-if="v$.contraseña.confirmar.$error">
            {{ v$.contraseña.confirmar.$errors[0].$message }}
          </span>
        </div>
        <input @click="validarFormulario()" type="button" class="btn btn-primary" value="Enviar"></input>
      </form>
    </div>
  </body>
</template>

<style scoped>
span {
  color:red
}
</style>