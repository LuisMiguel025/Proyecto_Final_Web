import { useState, useEffect } from "react";
import { database } from "./../firebase/firebaseConfig";
import { useAuth } from "./../contexts/AuthContext";

const useGetSpending = () => {
  const { user } = useAuth();
  const [Spendings, setSpendings] = useState([]);
  const [LastSpending, setLastSpending] = useState(null);
  const [ThereAreMore, setThereAreMore] = useState(false);

  const getMoreSpendings = () => {
    database
      .collection("Spendings")
      .where("user", "==", user.uid)
      .orderBy("date", "desc")
      .limit(10)
      .startAfter(LastSpending)
      .onSnapshot((snapshop) => {
        if (snapshop.docs.length > Spendings.length) {
          setLastSpending(snapshop.docs[snapshop.docs.length - 1].data());
          setSpendings(
            Spendings.concat(
              snapshop.docs.map((spending) => {
                return { ...spending.data(), id: spending.id };
              })
            )
          );
        } else {
          setThereAreMore(false);
        }
      });
  };

  useEffect(() => {
    const cancel = database
      .collection("Spendings")
      .where("user", "==", user.uid)
      .orderBy("date", "desc")
      .limit(10)
      .onSnapshot((snapshop) => {
        if (snapshop.docs.length > 0) {
          setLastSpending(snapshop.docs[snapshop.docs.length - 1].data());
          setThereAreMore(true);
        } else {
          setThereAreMore(false);
        }
        setSpendings(
          snapshop.docs.map((spending) => {
            return { ...spending.data(), id: spending.id };
          })
        );
      });
    return () => cancel;
  }, [user]);
  return [Spendings, getMoreSpendings, ThereAreMore];
};

export default useGetSpending;
