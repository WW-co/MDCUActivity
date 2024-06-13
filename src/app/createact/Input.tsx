'use client';

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
            <div>
                <label htmlFor="Activity_Name">Activity Name:</label>
                <input
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
                <input
                    type="text"
                    id="Detail"
                    name="Detail"
                    value={formData.Detail}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
