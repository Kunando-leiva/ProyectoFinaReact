import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDx0EpTv_SINLEHi0ymU-XsXJWWiIxK-Ro",
  authDomain: "proyectocode-5ce0c.firebaseapp.com",
  projectId: "proyectocode-5ce0c",
  storageBucket: "proyectocode-5ce0c.appspot.com",
  messagingSenderId: "566417721187",
  appId: "1:566417721187:web:220bd1445b44eb97f73556"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore (app)

export default db;