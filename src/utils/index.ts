import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCR9ZfREf6kvC_S_VeTak1KFrKbMxLE970",
  authDomain: "fast-campus-hotel-booking.firebaseapp.com",
  databaseURL: "https://fast-campus-hotel-booking-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fast-campus-hotel-booking",
  storageBucket: "fast-campus-hotel-booking.firebasestorage.app",
  messagingSenderId: "50437635680",
  appId: "1:50437635680:web:d64fa867a657ff03658d05"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
