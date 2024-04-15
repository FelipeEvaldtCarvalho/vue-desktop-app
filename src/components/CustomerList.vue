<template>
  <v-container>
    <v-row justify="space-between" class="mb-4">
      <div class="text-h4" v-text="'Clientes'"></div>
      <v-btn elevation="1" color="primary" @click="redirectToCreateForm"
        >Cadastrar</v-btn
      >
    </v-row>
    <v-row justify="space-between" align="center" class="gap-1">
      <v-text-field solo label="Pesquisar" prepend-inner-icon="mdi-magnify" />
      <v-radio-group class="radio-group">
        <v-radio color="primary" label="Endereço" value="radio-1"></v-radio>
        <v-radio color="primary" label="Nome" value="radio-2"></v-radio>
        <v-radio color="primary" label="Código" value="radio-3"></v-radio>
      </v-radio-group>
    </v-row>
    <VueTableLite
      :is-loading="isLoading"
      :columns="columns"
      :rows="customers"
      :total="customers.length"
      :sortable="sortable"
      class="mt-5"
    />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VueTableLite from "vue3-table-lite";

export default {
  name: "CustomerList",
  components: {
    VueTableLite,
  },
  data() {
    return {
      isLoading: false,
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Name",
          field: "name",
          width: "10%",
          sortable: true,
        },
        {
          label: "Rua",
          field: "address_street",
          width: "15%",
          sortable: true,
        },
        {
          label: "Número",
          field: "address_number",
          width: "3%",
          sortable: true,
        },
      ],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc",
      },
    };
  },
  methods: {
    ...mapActions("customers", ["getAllCustomers"]),
    redirectToCreateForm() {
      this.$router.push({ path: "customer/create" });
    },
  },
  computed: {
    ...mapGetters("customers", { customers: "getCustomers" }),
  },
  mounted() {
    this.getAllCustomers();
  },
};
</script>
<style scoped lang="scss">
.radio-group {
  flex: initial;
  ::v-deep {
    .v-selection-control-group {
      flex-direction: row;
    }
    .v-selection-control {
      flex: initial;
    }
  }
}
.gap-1 {
  gap: 1rem;
}
</style>
