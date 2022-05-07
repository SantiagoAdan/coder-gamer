import { collection, getDocs} from "firebase/firestore";
import fireStoreDB  from "./Firebase";

const colCatergories = collection(fireStoreDB,'categories');

  export const  getCategories =  async ()=>{
    let cats = [];
    await getDocs(colCatergories).then(querySnapShot =>{
        cats = querySnapShot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
        })
    })
    return cats;
  }
