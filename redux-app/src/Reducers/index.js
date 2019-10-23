import { combineReducers } from "redux";
import Immutable from "immutable";

const empData = () => {
  return Immutable.fromJS([
    { name: "Arun", code: "101" },
    { name: "Shri", code: "102" },
    { name: "Darshan", code: "103" }
  ]);
};

export default combineReducers({
  emps: empData
});
