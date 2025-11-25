<script></script>

<template>
  <header>
    <table class="table table-responsive table-dark" style="width: 100%">
      <tbody>
        <tr>
          <td><h1>Programación Frontend</h1></td>
          <td style="padding-top:1.5rem">
            <router-link class="btn" to="/">Cálculo de Calificaciones</router-link>
            <router-link class="btn" to="/formulario">Formulario de Registro</router-link>
          </td>
          <td style="padding-top:1.5rem">
            <input placeholder="Buscar..."></input>
            <button style="margin-bottom: 0.5rem;" class="btn">Busqueda</button>
          </td>
        </tr>
      </tbody>
    </table>
  </header>
  <body>
    <router-view/>
  </body>
</template>

<style scoped>

header {
  background-color: #75e07a;
  padding: 1rem
}

header td button {
  color: white;
  text-decoration: none
}

header td button:hover {
  color:#d351d3
}

a {
  color: white;
  text-decoration: none
}

a:hover {
  color:white
}

.router-link-active {
  color:#485358
}

.router-link-active:hover {
  color:#d351d3
}

</style>
