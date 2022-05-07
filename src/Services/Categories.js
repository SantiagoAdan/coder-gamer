import { collection, getDocs} from "firebase/firestore";
import fireStoreDB  from "./Firebase";

const colCatergorias = collection(fireStoreDB,'categories');

  export const  getCategorias =  async ()=>{
    let cats = [];
    await getDocs(colCatergorias).then(querySnapShot =>{
        cats = querySnapShot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
        })
    })
    return cats;
  }
