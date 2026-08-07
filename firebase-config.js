// Firebase SDK (CDN ES Modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
import { getDatabase, ref, set, get, push, onValue, child, update, remove } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgHuEPFHrClZPBhan8JEPrF-vsba6-AQI",
  authDomain: "manshau-alfaris-ee0e9.firebaseapp.com",
  databaseURL: "https://manshau-alfaris-ee0e9-default-rtdb.firebaseio.com",
  projectId: "manshau-alfaris-ee0e9",
  storageBucket: "manshau-alfaris-ee0e9.firebasestorage.app",
  messagingSenderId: "923493602955",
  appId: "1:923493602955:web:e18f4a17e35f908384668e",
  measurementId: "G-WB3382F1XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export everything needed for use across the app
export { app, analytics, db, ref, set, get, push, onValue, child, update, remove };
