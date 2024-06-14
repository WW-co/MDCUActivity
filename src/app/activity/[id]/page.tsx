'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Activity {
  id: string;
  actName: string;
  actDetail: string;
  department: string;
}

export default function Page() {
  const [activity, setActivity] = useState<Activity>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    
    async function getActivityData() {
      const res = await fetch(
        '/api/activities/' + params.id
      );

      if (res.status !== 200) console.error("can't fetch data")

      const data = await res.json();

      if (data.activity) {
        setActivity(data.activity[0] as Activity);
      }
    }

    getActivityData();
  }, []);

  return <div className="w-full flex justify-center">
    <div className="w-2/3">
      <h1 className='text-lg text-slate-500'>Activity Details</h1>
      
      <h2 className="text-4xl mt-10 font-bold">{activity?.actName}</h2>
      <h2 className="text-xl mt-10 bg-slate-200 p-5 rounded-md shadow-lg">{activity?.actDetail}</h2>
      <button className='mt-10 bg-purple-500 p-3 rounded-md shadow-md text-white hover:bg-purple-400'>เข้าร่วมกิจกรรม</button>
  </div>
  </div>;
}
