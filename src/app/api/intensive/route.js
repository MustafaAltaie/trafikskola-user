import IntensiveCards from '../../../../lib/models/Intensive';
import dbConnect from '../../../../lib/mongodb';

export async function GET() {
  await dbConnect();
  const items = await IntensiveCards.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}