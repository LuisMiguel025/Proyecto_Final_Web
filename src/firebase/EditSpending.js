import { database } from "./firebaseConfig";

const EditSpending = ({ id, description, costs, date, category }) => {
  return database.collection("Spendings").doc(id).update({
    description: description,
    costs: costs,
    date: date,
    category: category,
  });
};

export default EditSpending;
