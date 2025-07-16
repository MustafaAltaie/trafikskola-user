import Education from '../../../../lib/models/Education';
import dbConnect from '../../../../lib/mongodb';

export async function GET() {
  await dbConnect();
  const items = await Education.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}