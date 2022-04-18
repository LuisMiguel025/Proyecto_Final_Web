import { database } from "./firebaseConfig";

const AddSpending = (info) => {
  return database.collection("Spendings").add(info);
};

export default AddSpending;
