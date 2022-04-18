import { useState, useEffect } from "react";
import { database } from "./../firebase/firebaseConfig";
import { useHistory } from "react-router";

const useGetSpending = (id) => {
  const history = useHistory();
  const [Spending, setSpending] = useState({});
  useEffect(() => {
    const cancel = database
      .collection("Spendings")
      .doc(id)
      .get()
      .then((res) => {
        if (res.exists) {
          setSpending(res.data());
        } else {
          history.push("/list");
        }
      });
    return () => cancel;
  }, [history, id]);
  return [Spending];
};

export default useGetSpending;
