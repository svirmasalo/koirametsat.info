import { collection as collectionRef, addDoc } from 'firebase/firestore';
import { useFirestore, useCollection } from 'vuefire';
import { ReviewPost } from "types/review.post";

export const useReviews = (slug: string) => { 
    const db = useFirestore()
    const reviews = useCollection(collectionRef(db, slug));    

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

export const usePostReview = async (slug: string, data: ReviewPost) => {
    const db = useFirestore()
    const parkCollection = collectionRef(db, slug);    

    return await addDoc(parkCollection, data);
}