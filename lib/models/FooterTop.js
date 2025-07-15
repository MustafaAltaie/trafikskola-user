import { model, models, Schema } from 'mongoose';

const newLinks = new Schema({
    _id: { type: String, default: 'singleton_footer' },
    mobile: { type: String },
    messenger: { type: String },
    location: { type: String },
});

const FooterLinks = models.FooterLink || model('FooterLink', newLinks);
export default FooterLinks;