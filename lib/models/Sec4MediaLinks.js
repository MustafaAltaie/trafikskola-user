import { model, models, Schema } from 'mongoose';

const newLinks = new Schema({
    _id: { type: String, default: 'singleton_section4_socialMedia_links' },
    link1: { type: String },
    link2: { type: String },
    link3: { type: String },
    link4: { type: String },
});

const Sec4MediaLinks = models.Sec4MediaLink || model('Sec4MediaLink', newLinks);
export default Sec4MediaLinks;