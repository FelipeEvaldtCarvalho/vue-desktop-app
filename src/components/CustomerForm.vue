<template>
  <v-container>
    <v-row justify="space-between" align="center" class="mb-4">
      <div class="text-h4" v-text="'Cadastrar cliente'"></div>
      <div class="d-flex gap-1">
        <v-btn elevation="1" color="primary">cancelar</v-btn>
        <v-btn elevation="1" color="primary">salvar</v-btn>
      </div>
    </v-row>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field solo label="Nome" />
        </v-col>
        <v-col>
          <v-text-field solo label="Rua" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field solo label="Número" cols="2" />
        </v-col>
        <v-col>
          <v-text-field solo label="Bairro" />
        </v-col>
        <v-col>
          <v-text-field solo label="Complemento" />
        </v-col>
        <v-col>
          <v-select
            label="Select"
            :items="['Cachoeirinha', 'Gravataí']"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "CustomerForm",
};
</script>
