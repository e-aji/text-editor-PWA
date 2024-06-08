import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) =>  {
    
    console.log('PUT to the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ id: id, jate: content });
    const result = await request;
    console.log('Data saved to the database', result);

    // console.error('putDb not implemented');
}

// Method that gets all the content from the database
export const getDb = async (id) => {

    console.log('GET from the database');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('contact', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll(id);
    const result = await request;
    console.log('result.value', result);
    return result;

    // console.error('getDb not implemented');
}

initdb();
