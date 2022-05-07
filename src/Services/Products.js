import {
  collection,
  getDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import fireStoreDB from "./Firebase";

const colProductos = collection(fireStoreDB, "products");

export const getProductos = async () => {
  const querySnapshot = await getDocs(colProductos);

  const prods = querySnapshot.docs.map((doc) => {
    return prods;
  });
};

export const getProductosCategoria = async (categoria) => {
  const q = query(colProductos, where("categoria", "==", categoria));

  let prods = [];
  await getDocs(q).then((querySnapShot) => {
    prods = querySnapShot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  });
  return prods;
};

export const getProductosId = async (id) => {
  const snap = await getDoc(doc(fireStoreDB, "products", id));
  const prod = { id: snap.id, ...snap.data() };

  return prod;
};
