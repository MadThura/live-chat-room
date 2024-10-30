import { ref } from "vue";
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

let error = ref("");

let createAccount = async (email, password, displayName) => {
  try {
    let response = await createUserWithEmailAndPassword(auth, email, password);
    if (!response) {
      throw new Error("could not create new user");
    }
    await updateProfile(response.user, {
      displayName: displayName,
    });
    return response;
  } catch (err) {
    error.value = err.message;
  }
};

let useSignup = () => {
  return { error, createAccount };
};

export default useSignup;
