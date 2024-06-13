'use client'

import React, { useState } from 'react';

interface FormData {
    Activity_Name: string;
    Detail: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        Activity_Name: '',
        Detail: '',
    });

    const handleChange = (e: { target: { Activity_Name: string; value: string; }; }) => {
        const { Activity_Name, value } = e.target;
        setFormData({
            ...formData,
            [Activity_Name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.currentTarget)
        // Handle form submission logic
        console.log('Form data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Activity_Name">Activity_Name:</label>
                <input
                    type="text"
                    id="Activity_Name"
                    required
                />
            </div>
            <div>
                <label htmlFor="Detail">Detail:</label>
                <input
                    type="Detail"
                    id="Detail"
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
