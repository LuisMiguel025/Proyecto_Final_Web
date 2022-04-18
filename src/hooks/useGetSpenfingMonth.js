// import { database } from "./../firebase/firebaseConfig";
// import { useState, useEffect } from "react";

// const useGetSpendingMonth = () => {
//   const [Spending, setSpending] = useState([]);

//   useEffect(() => {
//     database
//       .collection("Spendings")
//       .orderBy("date", "desc")
//       .onSnapshot((snap) => {
//         console.log(snap.docs.forEach((item) => item.data()));
//       });
//     return () => {};
//   }, [Spending]);

//   return [Spending];
// };

// export default useGetSpendingMonth;
