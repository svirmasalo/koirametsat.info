import { collection } from 'firebase/firestore';
import { useFirestore, useCollection } from 'vuefire';

export const useReviews = (slug: string) => { 
    const db = useFirestore()
    // automatically waits for the data to be loaded on the server
    const reviews = useCollection(collection(db, slug));    

    // Get an average rating from an array of ratings
    const calclulateAverageRating = (ratings: any) => {
        if (!ratings.length) return 'Ei arvosteluja.';
        const sum = ratings.reduce((a : number, b: number) => a + b, 0);
        const avg = (sum / ratings.length).toFixed(2) || 0;
        return avg;
    };

    const averageRating = calclulateAverageRating(reviews.value.map((r) => r.rating));
    return { reviews, averageRating };
}