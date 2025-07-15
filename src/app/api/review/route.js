import Review from '../../../../lib/models/Review';
import dbConnect from '../../../../lib/mongodb';

export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  const newItem = new Review(data);
  await newItem.save();
  return new Response(JSON.stringify(newItem), { status: 201 });
}

export async function GET() {
  await dbConnect();
  const items = await Review.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}