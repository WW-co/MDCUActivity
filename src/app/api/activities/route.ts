import { db } from "@/db/index";
import { activity } from "@/db/schema";



export async function GET(request: Request, { params }: { params: { id: number } }) {
  const _activity = await db.select().from(activity);

  //const filteredActivity = _activity.filter(activity => activity.id == params.id);

  return Response.json({ activities: _activity });
}

