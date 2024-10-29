import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh1fd9evtkeYF-upcJdRWAlREJUK_J7II",
  authDomain: "vue-blog-system-f4a80.firebaseapp.com",
  projectId: "vue-blog-system-f4a80",
  storageBucket: "vue-blog-system-f4a80.appspot.com",
  messagingSenderId: "588941073990",
  appId: "1:588941073990:web:cc390dc7e393dc4060b447",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
