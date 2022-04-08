import http from "../http-common";

const getAll = () => {
   return http.get("/b/E862");
};

const get = paramsData => {
  return http.get(`/b/DN2D?${paramsData}`);
};

const VehicleService = {
  getAll,
  get,
};

export default VehicleService;
