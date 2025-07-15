import Sec4MediaLinks from '../../../../lib/models/Sec4MediaLinks';
import dbConnect from '../../../../lib/mongodb';

export async function GET() {
  await dbConnect();
  const items = await Sec4MediaLinks.findOne({});
  return new Response(JSON.stringify(items), { status: 200 });
}