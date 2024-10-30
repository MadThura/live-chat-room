import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref } from "vue";

let useCollection = (collectionName) => {
  let error = ref(null);
  let addData = async (doc) => {
    try {
      await addDoc(collection(db, collectionName), doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
    }
  };
  return { error, addData };
};

export default useCollection;
