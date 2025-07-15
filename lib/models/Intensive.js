import { model, models, Schema } from 'mongoose';

const newIntensive = new Schema({
    title: { type: String },
    price: { type: String },
    discount: { type: String },
    list: [{ type: String }],
});

const IntensiveCards = models.IntensiveCard || model('IntensiveCard', newIntensive);
export default IntensiveCards;