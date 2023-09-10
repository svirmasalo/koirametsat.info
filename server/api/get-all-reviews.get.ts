/**
 * Get all reviews from the Firebase database
 */
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const firebaseConfig = config.firebase;  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  const query = getQuery(event);
  
  if (!query.slug ) {
    return { statusCode: 200, body: 'Missing slug parameter', data: [] };
  }
  
  // Get a list of cities from your database
  async function getReviews(db) {
    try {
      const citiesCol = collection(db, query.slug);
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data());
      return {statusCode: 200, body: 'Found parks', data: cityList};
    } catch (e: any) {
      // Return standard http error object
      return { statusCode: 400, body: e.message, data: [] };
    }
  }
  return getReviews(db);
});