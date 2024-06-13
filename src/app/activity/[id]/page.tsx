'use client'

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
  }
]

const handleClick = () => {
  alert('ไม่มีกิจกรรมให้เข้าร่วมหรอก ทำไม่เป็น');
};

export default function Page({ params }: { params: { id: string }}) {
    const [activity, setActivity] = useState<Activity>();

    return <div className="w-full flex justify-center">
    <div className="w-2/3">
      <h1 className="text-4xl font-bold">{params.id} {activity?.actID}</h1>
      <h2 className="text-xl"> {activity?.actName}</h2>
      <button  onClick={handleClick} className="text-white bg-purple-500 p-5 rounded-md hover:bg-purple-300">เข้าร่วมกิจกรรม</button>
    </div>
  </div>;
}

