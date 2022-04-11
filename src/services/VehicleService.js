import http from "../http-common";
import listjson from "../json/List.json";
//import alljson from '../json/AllData.json';

const getAll = () => {
   return http.get("/b/LGL9");
   //return alljson;
};

const getList = () => {
  return listjson;
};

const VehicleService = {
  getAll,
  getList,
};

export default VehicleService;
