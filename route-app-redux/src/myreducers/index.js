import { createReducer } from "redux-create-reducer";

const employeeData = [
  {
    id: "100",
    name: "Cassio Zen",
    department: "Finance",
    email: "cassiozen@gmail.com"
  },
  {
    id: "101",
    name: "Dan Abramov",
    department: "Support",
    email: "gaearon@somewhere.com"
  },
  {
    id: "102",
    name: "Pete Hunt",
    department: "Sales",
    email: "floydophone@somewhere.com"
  }
];

const employeeAdd = (state, action) => {
  return state;
};

export default createReducer(employeeData, { employeeAdd });
