import { db } from "@/db/index";
import { activity } from "@/db/schema";

type NewActivity = typeof activity.$inferInsert;

export async function GET(request: Request, { params }: { params: { id: number } }) {
  const _activity = await db.select().from(activity);

  const filteredActivity = _activity.filter(activity => activity.id == params.id);

  return Response.json({ activity: filteredActivity });
}

export async function POST(request: Request, { params }: { params: { id: number }}) {
  const body = await request.json();

  const newActivity: NewActivity = {
    actName: body.actName,
    actDetail: body.actDetail,
    department:  body.department
  };

  await db.insert(activity).values(newActivity);

  return Response.json({ ok: true });
}