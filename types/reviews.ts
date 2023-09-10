export interface ReviewsResponse {
    statusCode: number;
    body: string;
    data: ReviewItem[];
}

export interface ReviewItem {
    user: string;
    rating: number;
    review: number;
    date: {
      seconds: number;
      nanoSeconds: number;
    };  
  }
