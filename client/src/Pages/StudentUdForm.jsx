import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const StudentUdForm = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState([])
    const [name,setName] = useState('')
    // gender = formData.gender

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.id]: e.target.value
        })
    }

    useEffect(() => {
        const getStudentById = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/student/getbyid/${id}`);
                setFormData(response.data)

            } catch (error) {
                console.error("There was an error fetching the student data!", error);
            }
        };
        getStudentById();
    }, [id]);


    return (
        <div className="container flex justify-center mx-auto py-8 text-left">
            <form className="w-full max-w-lg bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={''}>
                <h1 className="text-2xl text-gray-700 font-bold pt-5 mb-4">Student Update Information Form</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input onChange={handleChange} value={formData.name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
                    <select onChange={handleChange} value={formData.gender} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">Date of Birth</label>
                    <input onChange={handleChange} value={date} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact Details</label>
                    <input onChange={handleChange} value={formData.contact} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="Contact Details" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feesPaid">Fees Paid</label>
                    <input onChange={handleChange} value={formData.feesPaid} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feesPaid" type="text" placeholder="Fees Paid" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class">Class</label>
                    <input onChange={handleChange} value={formData.classname} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="class" type="text" placeholder="Class" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default StudentUdForm
