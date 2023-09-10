/**
 * Set new review to firestore database
 */
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore/lite';
import {ReviewPost} from '~/types/review.post';

interface ReviewRequest {
    slug: string
    data: ReviewPost
}

export default defineEventHandler(async (event) => {
    const body: ReviewRequest = await readBody(event)
    const { slug, data } = body;
    if (!slug || !data) {
        return { statusCode: 400, body: 'Missing slug or data', data: [] };
    }

    // Add timestamp to data as "date"
    const timestamp = Timestamp.now();
    data.date = timestamp;

    const config = useRuntimeConfig();
    const firebaseConfig = config.firebase;  
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionRef = collection(db, slug);

    const res = await addDoc(collectionRef, data);
      
    return { res }
});
