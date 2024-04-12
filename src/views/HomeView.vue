<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  mounted() {
    const novoCliente = {
      name: "Maria Oliveira",
      address_street: "Rua Nova",
      address_number: 456,
      address_district: "Bairro B",
      address_detail: "Casa",
      address_city: "Cidade B",
      phone_primary: "(00) 1111-2222",
      phone_secondary: "(00) 3333-4444",
      notes: "Cliente Regular",
      equipments: ["equipamento3"],
    };
    try {
      window.electron.customer.criarCliente(novoCliente);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
