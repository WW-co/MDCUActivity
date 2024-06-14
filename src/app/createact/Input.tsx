'use client';

import React, { useState } from 'react';

interface Content {
    actName: string;
    actDetail: string;
    department: string;
}

function CreateAct({ id }: { id?: string }) {
    const [content, setContent] = useState<Content>({
        actName: "",
        actDetail: "",
        department: "",
    });

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        fetch(`/api/actData/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(content),
        })
        .then(() => {
            location.reload();
        });
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setContent(prevContent => ({
            ...prevContent,
            [name]: value,
        }));
    }

    return (
        <form className="text-xl flex flex-col justify-center items-center gap-2" onSubmit={handleSubmit}>
            <div>
                <div>
                    <p>Activity Name:</p>
                    <input className='m-1 bg-gradient-to-l from-slate-100 to-slate-200 rounded-xl'
                        type="text"
                        id="Activity_Name"
                        name="actName"
                        value={content.actName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <p>Detail:</p>
                    <input className='m-1 bg-gradient-to-l from-slate-100 to-slate-200 rounded-xl'
                        type="text"
                        id="Detail"
                        name="actDetail"
                        value={content.actDetail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <p>Department:</p>
                    <input className='m-1 bg-gradient-to-l from-slate-100 to-slate-200 rounded-xl'
                        type="text"
                        id="Department"
                        name="department"
                        value={content.department}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <button className='hover:bg-purple-400 bg-purple-500 p-2 rounded-md text-white m-3' type="submit">Submit</button>
        </form>
    );
};

export default CreateAct;
