import ReviewState from '../../../../../lib/models/ReviewWrapper';
import dbConnect from '../../../../../lib/mongodb';

export async function GET() {
  await dbConnect();
  const items = await ReviewState.findOne({});
  return new Response(JSON.stringify(items), { status: 200 });
}