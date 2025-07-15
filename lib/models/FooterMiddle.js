import { model, models, Schema } from 'mongoose';

const newFooterMiddle = new Schema({
    _id: { type: String, default: 'footerMiddle_id' },
    link1: { type: String },
    link2: { type: String },
    link3: { type: String },
});

const FooterMiddleLinks = models.FooterMiddleLink || model('FooterMiddleLink', newFooterMiddle);
export default FooterMiddleLinks;