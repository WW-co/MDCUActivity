'use client';

import React, { useState } from 'react';

interface FormData {
    Activity_Name: string;
    Detail: string;
    Department: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        Activity_Name: '',
        Detail: '',
        Department: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div >
                <label htmlFor="Activity_Name">Activity Name:</label>
                <input className='m-1 bg-gradient-to-l from-slate-100 to-slate-200  rounded-xl'
                    type="text"
                    id="Activity_Name"
                    name="Activity_Name"
                    value={formData.Activity_Name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="Detail">Detail:</label>
                <input className='m-1 bg-gradient-to-l from-slate-100 to-slate-200  rounded-xl'
                    type="text"
                    id="Detail"
                    name="Detail"
                    value={formData.Detail}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="Department">ฝ่าย:</label>
                <input className='m-1 bg-gradient-to-l from-slate-100 to-slate-200  rounded-xl'
                    type="text"
                    id="Department"
                    name="Department"
                    value={formData.Department}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className='text-center max-w-16 bg-purple-400 p-2 rounded-md text-white' type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
