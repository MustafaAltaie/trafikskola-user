import { model, models, Schema } from 'mongoose';

const newPrice = new Schema({
    title: { type: String },
    description: { type: String },
    price: { type: String },
});

const PriceCards = models.PriceCard || model('PriceCard', newPrice);
export default PriceCards;