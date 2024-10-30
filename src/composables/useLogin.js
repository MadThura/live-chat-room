import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

let error = ref("");

let signIn = async (email, password) => {
  try {
    let response = await signInWithEmailAndPassword(auth, email, password);
    if (!response) {
      throw new Error("can't login account");
    }
    return response;
  } catch (err) {
    error.value = err.message;
  }
};

let userLogin = () => {
  return { error, signIn };
};

export default userLogin;
