import FooterLinks from '../../../../lib/models/FooterTop';
import dbConnect from '../../../../lib/mongodb';

export async function GET() {
  await dbConnect();
  const items = await FooterLinks.findOne({});
  return new Response(JSON.stringify(items), { status: 200 });
}