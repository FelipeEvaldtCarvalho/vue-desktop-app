export default {
  getAllCustomers: async ({ commit }) => {
    try {
      const data = window.electron.customer.getAllCustomers();
      commit("SET_CUSTOMERS", data);
    } catch (error) {
      console.log(error);
    }
  },
};
