import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

export default {
  async getEmployee({ commit }, data) {
    data = data.replace(/ /g, "");
    commit("setLoading", true);

    if (data.split(",").length > 1) {
      // При вводе больше 1 имени в поиск отрабатывает это механизм
      let arrayToOut = [];
      for (let item of data.split(",")) {
        await instance(`?username=${item}`)
          .then((resp) => {
            arrayToOut.unshift(resp.data[0]);
          })
          .catch((err) => {
            return err;
          });
      }
      commit("setLoading", false);
      commit("setEmployee", arrayToOut);
    } else {
      // при одиночном поиске
      await instance(`?username=${data}`)
        .then((resp) => {
          commit("setEmployee", resp.data);
        })
        .catch((err) => {
          return err;
        });
      commit("setLoaded", false);
    }
  },
};
