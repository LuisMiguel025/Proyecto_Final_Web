import { database } from "./firebaseConfig";

const AddSpending = (id) => {
  return database.collection("Spendings").doc(id).delete();
};

export default AddSpending;
