'use client'

import Link from 'next/link';
import { useEffect, useState } from "react";

interface Activity {
    id: string;
    actName: string;
    actDetail: string;
    department: string;
}

const ActivityList = () => {
    const [activities, setActivities] = useState<Activity[]>();

useEffect(() => {
  const fetchActivities = async () => {
      const response = await fetch('/api/activities');
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setActivities(data.activities);
    
  };

  fetchActivities();
})

if (!activities) {
    return <div>No data!!!</div>
}

return (
    <div className="flex flex-col gap-2 px-4">
      <h2 className="text-3xl font-semibold">Dashboard</h2>
      <hr className="border-slate-800 border-2" />
      <div className="grid grid-cols-4 gap-2">
        {activities.map((activity) => {
          return (
            <Link href={`/activity/${activity.id}`}>
              <div className="size-full min-h-64 border border-slate-800 shadow-lg rounded-2xl p-4">
                <h3 className="text-2xl font-semibold">{activity.actName}</h3>
                <h4 className="text-lg text-slate-600">{activity.actDetail}</h4>
                <h4 className="text-lg text-slate-600">ผู้จัด: {activity.department}</h4>
              </div>
              </Link>
          );
        })}
      </div>
    </div>
  );
};




export default ActivityList;