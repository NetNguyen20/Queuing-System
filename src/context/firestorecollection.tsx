import { collection } from "firebase/firestore";
import { db } from "../firebase";

export const quanlythietbiRef = collection(db, 'thietbi')