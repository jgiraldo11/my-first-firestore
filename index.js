//import tools we need from firebase-admin library
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"; 

// import our credentials from secrets.js
import { creds } from "./secrets.js";

// connect to our Firebase project (need cridentials)
initializeApp({
    credential: cert(creds), 
});

// connect to the Firestore databse (just ask)
const db = getFirestore();

// CRUD

// const shorts ={
//    brand: "Loft",
//    style: "shorts",
//    color: "white",
//    size: "M",
//    price: 29.99
// }

// let's add a shirt to our clothing collection
// db.collection('clothing').add(shorts)
// .then(doc => {
//     console.log("Clothing added: " + doc.id);
// })
// .catch(console.error);

// now that we have some data let's READ (get) them
 db.collection('clothing').get()
     .then(collection => { // this example is using shorthand code using the spread operator
        const clothing = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
     })
     .catch(console.error);