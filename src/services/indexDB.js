/* eslint no-use-before-define: 0 */  // --> OFF

import { analytics } from "ionicons/icons";

let outDB = 0;
let db = 0;


const dbName = 'myDB',
    storeName = 'recurso'

// function to create database 
const createDB = () => {
  if(window.indexedDB) {
    const request = window.indexedDB.open(dbName, 1);

    request.onerror = (event) => {
        console.log("Error request", event);
    }

    request.onsuccess = (event) => {
        db = request.result;
        console.log("Successed request", event, db);
    }

    request.onupgradeneeded = (event) => {
        console.log("Upgraded request");

        let db = event.target.result;

        let objectStore = db.createObjectStore(storeName,
            {
                keyPath: 'id',
                autoIncrement: true 
            }
        );

        objectStore.createIndex('favoritos', 'favoritos', {unique: false});

    }

  } else {
    console.log('no support')
  }
}

const addData = (favoritos ) => {

    const transactionAdd = db.transaction([storeName], 'readwrite');
    const objectStore = transactionAdd.objectStore(storeName);

    const newFavorito = {
        favoritos: favoritos,
    }

    // eslint-disable-next-line no-undef
    const request = objectStore.add(newFavorito);

    // eslint-disable-next-line no-undef
    transactionAdd.oncomplete = (event) => {
        console.log("transaction completed", event);
    }

    // eslint-disable-next-line no-undef
    transactionAdd.onerror = (event) => {
        console.log("transaction failed", event);
    }
}


document.addEventListener('DOMContentLoaded', () => {
  outDB = document.getElementById('output-db');
  createDB();
})

 export { addData, createDB};