<template>
  <v-container>
    <v-row justify="space-between" class="mb-4">
      <div class="text-h4" v-text="'Clientes'"></div>
      <v-btn elevation="1" color="primary">Cadastrar</v-btn>
    </v-row>
    <v-row justify="space-between" align="center" class="gap-1">
      <v-text-field solo label="Pesquisar" prepend-inner-icon="mdi-magnify" />
      <v-radio-group class="radio-group">
        <v-radio color="primary" label="Endereço" value="radio-1"></v-radio>
        <v-radio color="primary" label="Nome" value="radio-2"></v-radio>
        <v-radio color="primary" label="Código" value="radio-3"></v-radio>
      </v-radio-group>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CustomerList",
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
    };
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
