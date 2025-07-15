import PriceCards from '../../../../lib/models/Prices';
import dbConnect from '../../../../lib/mongodb';

export async function GET() {
  await dbConnect();
  const items = await PriceCards.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}