import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

export default {
  async getEmployee({ commit }, data) {
    data = data.replace(/ /g, "");
    commit("setLoading", true);

    try {
      const dataArray = data.split(",");
      const arrayToOut = await Promise.all(
        dataArray.map(async (item) => {
          if (Number.isInteger(Number(item))) {
            // Если ввели Id
            const response = await instance.get(`/${item}`);
            return response.data;
          } else {
            // Если ввели имя
            const response = await instance.get(`?username=${item}`);
            return response.data[0];
          }
        })
      );

      commit("setEmployee", arrayToOut);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      commit("setLoading", false);
    }
  },
};
