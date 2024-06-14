'use client'

import { useParams } from 'next/navigation';
import { SetStateAction, useEffect, useState } from 'react';

interface Activity {
    activities: SetStateAction<Activity | undefined>;
    id: number;
    actName: string;
    actDetail: string;
    department: string;
}




const handleClick = () => {
  alert('ไม่มีกิจกรรมให้เข้าร่วมหรอก ทำไม่เป็น');
};

export default function Page() {
    const [activity, setActivity] = useState<Activity>();
    const params = useParams<{ id: string }>();

async function getActivityData() {
  const res = await fetch(
    '/api/actData/' + params.id
  );


  const data: Activity = await res.json();

  setActivity(data.activities);
}

getActivityData();
    return <div className="w-full flex justify-center">
    <div className="w-2/3">
      <h1 className="text-4xl font-bold">{params.id} {activity?.id}</h1>
      <h2 className="text-xl"> {activity?.actName}</h2>
      <button  onClick={handleClick} className="text-white bg-purple-500 p-5 rounded-md hover:bg-purple-300">เข้าร่วมกิจกรรม</button>
    </div>
  </div>;
}

