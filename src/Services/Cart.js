import { collection, addDoc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";

import fireStoreDB from "./Firebase";

const colOrders   = collection(fireStoreDB,'orde');
const colProducts = collection(fireStoreDB,'products');

export const crearOrden = (orden) =>{
    
    const prodIds = orden.items.map(prod=>prod.id)

    const batch = writeBatch(fireStoreDB)
    const sinStock = []

    const id = getDocs(query(colProducts, where(documentId(),'in',prodIds)))
        .then(resp =>{
            resp.docs.forEach(doc => {
                const data = doc.data();
                const cntSelect = orden.items.find(prod =>prod.id=doc.id).seleccionado
                if(data.stock>=cntSelect){
                    batch.update(doc.ref, {stock: data.stock -cntSelect })
                }else{
                    sinStock.push({id:doc.id, data})
                }
            })
        }).then(()=>{
            if(sinStock.length===0){
                return  addDoc(colOrders,orden)                
            }else{
                return Promise.reject({nombre:'sinStock', products:sinStock })
            }
        }).then((doc)=>{
            batch.commit()
            return doc.id
        }).catch((error)=>{
            if(error && error.nombre==='sinStock' && error.products.length>0){
                console.log(error.products)
            }else{
                console.log(error)
            }
        })

        return id
        
}
