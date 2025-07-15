import IntegrityAndTerms from '../../../../lib/models/IntegrityAndTerms';
import dbConnect from '../../../../lib/mongodb';

export async function GET() {
  await dbConnect();
  const items = await IntegrityAndTerms.findOne({});
  return new Response(JSON.stringify(items), { status: 200 });
}