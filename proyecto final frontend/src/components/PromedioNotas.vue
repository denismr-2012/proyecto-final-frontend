<script>
import useVuelidate from '@vuelidate/core';
import { required, between } from '@vuelidate/validators';
export default {
  name: 'PromedioNotas',
  data() {
    return {
      v$: useVuelidate(),
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      promedio: null,
      advertencia: false,
      estado: null
    }
  },
  validations() {
    return {
      nota1: {required, between: between(10, 70)},
      nota2: {required, between: between(10, 70)},
      nota3: {required, between: between(10, 70)},
      asistencia: {required, between: between(0, 100)},
    }
  },
  methods: {
    validarFormulario(){
      this.v$.$validate()
      this.promedio = ((this.nota1 * 35) + (this.nota2 * 35) + (this.nota3 * 30)) / (35 + 35 + 30)
      console.log(this.promedio)
      if (!this.v$.$error) {
        this.advertencia= false
        if (this.promedio >= 40 && this.asistencia >= 80) {
          this.estado=true
        }
        else {
          this.estado=false
        }
      }
      else {
        this.advertencia= true
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
          <label for="nota1">Nota 1</label>
          <input v-model="nota1" class="form-control" id="nota1" placeholder="Nota 1">
          <span v-if="v$.nota1.$error">
            {{ v$.nota1.$errors[0].$message }}
          </span>
        </div>
        <div class="form-group" style="margin: 2rem">
          <label for="nota2">Nota 2</label>
          <input v-model="nota2" class="form-control" id="nota2" placeholder="Nota 2">
          <span v-if="v$.nota2.$error">
            {{ v$.nota2.$errors[0].$message }}
          </span>
        </div>
        <div class="form-group" style="margin: 2rem">
          <label for="nota3">Nota 3</label>
          <input v-model="nota3" class="form-control" id="nota3" placeholder="Nota 3">
          <span v-if="v$.nota3.$error">
            {{ v$.nota3.$errors[0].$message }}
          </span>
        </div>
        <div class="form-group" style="margin: 2rem">
          <label for="asistencia">Asistencia %</label>
          <input v-model="asistencia" class="form-control" id="asistencia" placeholder="Asistencia">
          <span v-if="v$.asistencia.$error">
            {{ v$.asistencia.$errors[0].$message }}
          </span>
        </div>
        <input @click="validarFormulario()" type="button" class="btn btn-primary" value="Calcular"></input>
      </form>
      <p v-if="advertencia" style="color:red">Por favor, ingrese valores válidos para las notas y asistencia</p>
      <div>
        <p v-if="estado==true"><strong>Su promedio es: {{ promedio }}.<br/><br/>Su estado es: Aprobado.</strong></p>
        <p v-else-if="estado==false"><strong>Su promedio es: {{ promedio }}.<br/><br/>Su estado es: Reprobado.</strong></p>
        <p v-else></p>
      </div>
    </div>
  </body>
</template>

<style scoped>
span {
  color:red
}
</style>