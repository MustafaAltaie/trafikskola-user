import FooterMiddleLinks from '../../../../lib/models/FooterMiddle';
import dbConnect from '../../../../lib/mongodb';

export async function GET() {
  await dbConnect();
  const items = await FooterMiddleLinks.findOne({});
  return new Response(JSON.stringify(items), { status: 200 });
}