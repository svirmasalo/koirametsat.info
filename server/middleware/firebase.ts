import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    const firebaseConfig = config.firebase;  
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    event.db = db;

})