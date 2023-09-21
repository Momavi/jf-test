export default {
  // Мутация для установки списка сотрудников
  setEmployee: (state, employee) => {
    state.employee = employee;
  },

  // Мутация для установки состояния загрузки
  setLoading: (state, loading) => {
    state.loading = loading;
  },

  // Мутация для установки текущего сотрудника
  setCurrentEmployee: (state, currentEmployee) => {
    state.currentEmployee = currentEmployee;
  },
};
