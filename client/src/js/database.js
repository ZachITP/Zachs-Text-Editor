import { openDB } from 'idb';

const initdb = async () =>
  openDB('ZTE', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('ZTE')) {
        console.log('ZTE database already exists');
        return;
      }
      db.createObjectStore('ZTE', { keyPath: 'id', autoIncrement: true });
      console.log('ZTE database created');
    },
  });

// GET function
export const getDb = async (value) => {
  console.log('Getting data from the ZTEDB');
  // connect to DB and version we want to use
  const ZTEDb = await openDB('ZTE', 1);
  // make new transaction...need to specify the DB we are posting to and the data privileges. 
  const tx = ZTEDb.transaction('ZTE', 'readwrite');
  // open the object store
  const objStore = tx.objectStore('ZTE');
  // use the .getAll() method to grab all the content in the DB
  const req = objStore.getAll()
  // confirm the data was fetched
  const res = await req;
  console.log('data saved to the ZTEDB', res);
};

// PUT function
export const putDb = async (id, value) => {
  console.log('PUT request to update the ZTEDB');
  // connect to DB and version we want to use
  const ZTEDb = await openDB('ZTE', 1);
  // make new transaction...need to specify the DB we are posting to and the data privileges. 
  const tx = ZTEDb.transaction('ZTE', 'readwrite');
  // open the object store
  const objStore = tx.objectStore('ZTE');
  // use the .add() method to pass in content
  const req = objStore.put({ id: id, value: value })
  // confirm the data was added
  const res = await req;
  console.log('data saved to the ZTEDB', res);
};


initdb();