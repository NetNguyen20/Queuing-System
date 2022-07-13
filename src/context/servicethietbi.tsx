import {db} from "../firebase"

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"

const thietbiCollectionRef = collection(db, "thietbi"); 

class Thietbiservice{
    addThietbi = (newThietbi) =>{
        return addDoc(thietbiCollectionRef, newThietbi);
    };

    updateThietbi = (id, updateThietbi) => {
        const thietbiDoc = doc(db, "thietbi", id);
        return updateDoc(thietbiDoc, updateThietbi);
    };

    getAllThietbi = () =>{
        return getDocs(thietbiCollectionRef);

    }

    getThietbi = (id)=> {
        const thietbiDoc = doc(db, "thietbi", id);
        return getDoc(thietbiDoc);
    }
    

}

export default new Thietbiservice();