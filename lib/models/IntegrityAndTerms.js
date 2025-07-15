import { model, models, Schema } from 'mongoose';

const integrityAndTermsSchema = new Schema({
    _id: { type: String, default: 'singleton_integrity_terms_id_address' },
    integrity: { type: String },
    terms: { type: String }
});

const IntegrityAndTerms = models.IntegrityAndTerms || model('IntegrityAndTerms', integrityAndTermsSchema);
export default IntegrityAndTerms;