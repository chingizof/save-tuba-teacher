import { usersCollection } from './connect.js'
import { getDocs }  from "firebase/firestore";

export const getAllUsers = async () => {
    const response = await getDocs(usersCollection);
    const content = new Map(); //object that stores all users by IDs

    response.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      content.set(doc.id, doc.data())
    })

    return content
  }