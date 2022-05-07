import {
  collection,
  getDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import fireStoreDB from "./Firebase";

const colProducts = collection(fireStoreDB, "products");

export const getProducts = async () => {
  const querySnapshot = await getDocs(colProducts);

  const prods = querySnapshot.docs.map((doc) => {
    return prods;
  });
};

export const getProductsCategories = async (categories) => {
  const q = query(colProducts, where("categories", "==", categories));

  let prods = [];
  await getDocs(q).then((querySnapShot) => {
    prods = querySnapShot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  });
  return prods;
};

export const getProductsId = async (id) => {
  const snap = await getDoc(doc(fireStoreDB, "products", id));
  const prod = { id: snap.id, ...snap.data() };

  return prod;
};
