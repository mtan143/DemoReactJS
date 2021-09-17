import axiosClient from "./axiosClient";
const productApi = {
  async getAll(params) {
    const url = "/product";
    const productList = await axiosClient.get(url, { params });
    return {
      data: productList.listResult,
      pagination: {
        page: params.page,
        limit: params.limit,
        total: productList.totalItem,
      },
    };
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/product";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/product/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
};
export default productApi;
