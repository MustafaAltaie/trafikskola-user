import { model, models, Schema } from 'mongoose';

const newReview = new Schema({
    name: { type: String },
    age: { type: Number },
    message: { type: String },
    rating: { type: Number, required: true }
});

const Review = models.reviews || model('reviews', newReview);
export default Review;