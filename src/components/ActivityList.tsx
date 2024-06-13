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
        actDetail: "activity",
        actID: "1",
        actName: "hi",
        department: "ฝ่ายA"
    },
    {
        actDetail: "ไม่รู้",
        actID: "2",
        actName: "งาน",
        department: "ฝ่ายB"
    },
    {
        actDetail: "อันนี้งงมาก",
        actID: "3",
        actName: "งง",
        department: "ฝ่ายนั้นแหละ"
    },
    {
      actDetail: "ทดลอง",
      actID: "4",
      actName: "ไม่รู้ๆๆๆๆ",
      department: "ฝ่ายนี้ไม่มีชื่อ"
    }
]

const ActivityList = () => {
    const [activities, setActivities] = useState<Activity[]>(baseActivities);

if (!activities) {
    return <div>No data ค่ะ!!!</div>
}

return (
    <div className="flex flex-col gap-2 px-4">
      <h2 className="text-3xl font-semibold">Dashboard</h2>
      <hr className="border-slate-800 border-2" />
      <div className="grid grid-cols-4 gap-2">
        {activities.map((activity) => {
          return (
            <Link href={`/activity/${activity.actID}`}>
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