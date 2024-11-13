import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log('Form data:', data); // Log the form data
        sendData(data); // Call sendData with the form data
    }

    const sendData = async (data) => {
        try {
            console.log("hey");
            
            const response = await axios.post("http://localhost:4000/contact", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Sent:", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <>
            <div className="flex flex-col md:flex-row w-full h-[155vh] md:h-[100vh] gap-8">
                <div className="md:w-1/2 my-16 h-full md:h-fit md:py-10 mx-8 rounded-lg bg-secondary text-white">
                    <div className="px-10">
                        <h1 className="text-3xl text-center py-4">Send Message</h1>
                        <form action="post" onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                            <label className="mt-8" htmlFor="name">Full Name:</label>
                            <input type="text" name="name" className="bg-white px-1 py-1 rounded-md w-1/2 outline-none text-black"
                                {...register("name", { required: true })} />
                            {errors.name && <span className="mt-2 text-red-600">This field is required</span>}
                            <label className="mt-8" htmlFor="email">Email:</label>
                            <input type="email" name="email" className="bg-white px-1 py-1 rounded-md w-1/2 outline-none text-black"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="mt-2 text-red-600">This field is required</span>}
                            <label className="mt-8" htmlFor="message">Message:</label>
                            <textarea name="message" className="resize-none rounded-md text-black outline-none"
                                {...register("message", { required: true })}></textarea>
                            {errors.message && <span className="mt-2 text-red-600">This field is required</span>}
                            <input type="submit" value="Send Message" className="mt-8 bg-tertiary text-black w-fit px-2 py-2 rounded-md" />
                        </form>
                    </div>
                </div>
                <div className="flex flex-col my-10 md:my-16 md:w-1/2">
                    <div className="mx-auto">
                        <h1 className="text-3xl my-4">Contact Us:</h1>
                        <p className="flex my-4"><box-icon name='facebook-circle' type='logo' animation="tada-hover"></box-icon> &nbsp; Notesflix</p>
                        <p className="flex my-4"><box-icon name='gmail' type='logo' animation="tada-hover"></box-icon>&nbsp;Notesflix@gmail.com</p>
                        <p className="flex my-4"><box-icon name='telegram' type='logo' animation="tada-hover"></box-icon> &nbsp; Notesflix</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
