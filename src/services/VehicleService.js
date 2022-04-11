import http from "../http-common";
import listjson from "../json/List.json";

const getAll = () => {
   return http.get("/b/LGL9");
};

const getList = () => {
  return listjson;
};

const VehicleService = {
  getAll,
  getList,
};

export default VehicleService;
