type Props = {};
import React from 'react';
import Input from './Input';
// import ContactForm from './input.tsx';

const page = (props: Props) => {
  return <div>
    <h1 className='text-xl font-extrabold'>หน้านี้ไว้สร้างกิจกรรม จริงๆนะ สร้างๆได้จริงๆ
      <span className='text-red-500'>ไม่ได้โม้ ไม่เชื่อไปดูคอนโซลได้</span>
    </h1>
    <p className='text-slate-200'>จริงๆสร้างไม่ได้หรอก</p>
    <Input />
  </div>;
};


export default page;

