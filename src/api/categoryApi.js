import axiosClient from "./axiosClient";
const categoryApi = {
  async getAll(params) {
    const url = "/category";
    const categoryList = await axiosClient.get(url, { params });
    return categoryList;
  },
  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/category";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/category/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/category/${id}`;
    return axiosClient.delete(url);
  },
};
export default categoryApi;
