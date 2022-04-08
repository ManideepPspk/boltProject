import http from "../http-common";
import listjson from "../json/List.json";

const getAll = () => {
   return http.get("/b/Y5DK");
};

const getList = () => {
  return listjson;
};

const VehicleService = {
  getAll,
  getList,
};

export default VehicleService;
