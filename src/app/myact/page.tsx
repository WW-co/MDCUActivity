'use client'

import Link from 'next/link';
import { useState } from "react";

interface Activity {
    actID: string;
    actName: string;
    actDetail: string;
    department: string;
}

const baseActivities: Activity[] = [
    {
        actDetail: "description1",
        actID: "1",
        actName: "Name1",
        department: "A Club"
    },
    {
        actDetail: "description2",
        actID: "2",
        actName: "Name2",
        department: "B Club"
    },
    {
        actDetail: "description3",
        actID: "3",
        actName: "Name3",
        department: "C Club"
    }
]

const ActivityList = () => {
    const [activities, setActivities] = useState<Activity[]>(baseActivities);

if (!activities) {
    return <div>No data!!!</div>
}

return (
    <div className="flex flex-col gap-2 px-4">
      <h2 className="text-3xl font-semibold">My activities</h2>
      <hr className="border-slate-800 border-2" />
      <div className="grid grid-cols-4 gap-2">
        {activities.map((activity) => {
          return (
            <Link href={`/myactivity/${activity.actID}`}>
              <div className="size-full min-h-64 border border-slate-800 shadow-lg rounded-2xl p-4">
                <h3 className="text-2xl font-semibold">{activity.actName}</h3>
                <h4 className="text-lg mt-5 text-slate-600">By {activity.department}</h4>
              </div>
              </Link>
          );
        })}
      </div>
    </div>
  );
};


               




export default ActivityList;