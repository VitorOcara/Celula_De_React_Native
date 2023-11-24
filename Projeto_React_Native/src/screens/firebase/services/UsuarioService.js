import { createUserWithEmailAndPassword } from "firebase/auth";

class UsuarioService {
  static singUp = (auth, email, password, callback) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        callback(userCredential);
      })
      .catch((error) => console.error(error));
  };
}

export default UsuarioService;
