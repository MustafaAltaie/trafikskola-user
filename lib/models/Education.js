import { model, models, Schema } from 'mongoose';

const educationSchema = new Schema({
    title: { type: String },
    price: { type: Number },
    discount: { type: Number },
    list: [{ type: String }]
});

const Education = models.education || model('education', educationSchema);
export default Education;