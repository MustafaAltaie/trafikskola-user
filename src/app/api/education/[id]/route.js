import Education from '../../../../../lib/models/Education';
import dbConnect from '../../../../../lib/mongodb';

export async function PATCH(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const data = await req.json();

  try {
    const updated = await Education.findByIdAndUpdate(id, data, { new: true });
    if (!updated) return new Response(JSON.stringify({ message: 'Not Found' }), { status: 404 });
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (error) {
    console.error('Error occured:', error);
    return new Response(JSON.stringify({ error: 'Failed to update' }), { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  await dbConnect();
  const { id } = await params;

  try {
    const deletedItem = await Education.findByIdAndDelete(id);
    if (!deletedItem) {
      return new Response(JSON.stringify({ message: 'Not Found' }), { status: 404 });
    }

    return new Response(JSON.stringify(deletedItem), { status: 200 });
  } catch (error) {
    console.error('Error occured:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete item' }), { status: 500 });
  }
}