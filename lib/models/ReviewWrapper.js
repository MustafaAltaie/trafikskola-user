import { model, models, Schema } from 'mongoose';

const newState = new Schema({
    _id: { type: String, default: 'singleton_review_state' },
    reviewState: { type: Boolean, default: false }
});

const ReviewState = models.ReviewStatus || model('ReviewStatus', newState);
export default ReviewState;