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
//db.collection('clothing').get()
//     .then(collection => { 
//          // this example is using shorthand code using the spread operator
//        const clothing = collection.docs.map(doc => ({ id: doc.id, ...doc.data()}));
//        console.table(clothing);
//     })
//     .catch(console.error);

// Let's say I want to find all of the clothing items that are >= 59.99
// db.collection('clothing') 
//    .where('price', '>=', 59.99).get()
//    .where('style', '==', 'shorts')
//    .then(collection => {
//        const clothing = collection.docs.map(doc => ({...doc.data(), id: doc.id }));
//        console.table(clothing);
//    })
//    .catch(console.error)

// now lets get a single document by id (we'll use await , just to show)
//    const doc = await db.collection('clothing').doc('oLkEjSx8Hu0d4yYppZOs').get()
//    .catch(console.error);
//    const clothingItem = {...doc.data(), id: doc.id};
//    console.table(clothingItem);

// let's update a single document: // UPDATE:
// db.collection('clothing').doc('5lijuUzYYM3UXJgNIZld')
//    .update({ color: 'red', rating: 4.9})
//    .then(doc => console.log('Updated doc: ' + doc.id))
//    .catch(console.error)

// Even though we SELDOM delete, here's how: // DELETED:
// await db.collection('clothing').doc('oLkEjSx8Hu0d4yYppZOs')
//     .delete()
// console.log('DELETED')


    