/* eslint-disable react-hooks/rules-of-hooks */
import { useFormik } from "formik";
import React from "react";
import { contactSchema } from "../schema";
import "../App.css";

const onSubmit = async (values, actions) => {

    console.log(values);
    console.log('Submitted');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Form Submitted")
    actions.resetForm()

}

const contact = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({

        initialValues: {

            first_name: '',
            last_name: '',
            message: '',
            email: '',
            check: '',

        },

        validationSchema: contactSchema,
        onSubmit,

    });

    console.log(errors);

    return (

        <div>

            <section className="flex justify-center items-center my-10 md:my-20 mx-4 md:mx-0">

                <div className="flex flex-col">

                    <div className="mb-4">

                        <h1 className="font-bold text-2xl">Contact Me</h1>
                        <p className="text-gray-500 text-lg mt-3">Hi there, contact me to ask me about anything you have in mind.</p>

                    </div>

                    <form action="#"
                        autoComplete="off"
                        onSubmit={handleSubmit}>

                        <div className="md:flex">

                            <div className="md:mr-6 mr-0">

                                <label for="first_name" className="font-semibold text-gray-700">First name</label>

                                <input type="text"

                                    placeholder="Enter your first name" id="first_name"
                                    className="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-20 mt-2 focus:outline-none"
                                    required
                                    onChange={handleChange}
                                    value={values.first_name}
                                    onBlur={handleBlur} />

                                {errors.first_name && touched.first_name && <p className="text-red-500"> {errors.first_name} </p>}

                            </div>

                            <div>

                                <label for="last_name" className="font-semibold text-gray-700">Last name</label>

                                <input type="text"
                                    placeholder="Enter your last name"
                                    id="last_name"
                                    className="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-20 mt-2 focus:outline-none"
                                    required
                                    onChange={handleChange}
                                    value={values.last_name}
                                    onBlur={handleBlur} />

                                {errors.last_name && touched.last_name && <p className="text-red-500"> {errors.last_name} </p>}

                            </div>

                        </div>

                        <div className="mt-4">

                            <label for="email" className="font-semibold text-gray-700">Email</label>

                            <input type="email"

                                placeholder="yourname@email.com"
                                id="email"
                                class="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-20 mt-2 focus:outline-none"
                                required
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur} />

                            {errors.email && touched.email && <p className="text-red-500"> {errors.email} </p>}

                        </div>

                        <div className="flex flex-col mt-4">

                            <label for="message" className="font-semibold text-gray-700"> Message </label>

                            <textarea name="message" id="message" cols="30" rows="5"

                                placeholder="Send me a message and i'll reply you as soon as possible..."
                                className="border border-gray-300 rounded-lg pt-3 pl-3 mt-2 focus:outline-none"
                                required
                                onChange={handleChange}
                                value={values.message}
                                onBlur={handleBlur} > </textarea>

                            {errors.message && touched.message && <p className="text-red-500"> {errors.message} </p>}

                        </div>

                        <div className="mt-4">

                            <input type="checkbox"

                                id="check"
                                className="h-4 w-4"
                                required
            
                            />

                            <label for="check"

                                className="ml-2 text-gray-500">You agree to providing your data to Blessing_U who may contact you
                            </label>

                        </div>

                        <button disabled={isSubmitting}

                            className="bg-blue-600 rounded text-white font-bold p-2 w-full mt-6"
                            id="btn__submit">Send message

                        </button>


                    </form>

                </div>

            </section>

            {/* footer section */}

            <footer className="foot">

                <p className="zuri">Zuri Internship</p>

                <p className="HNG">HNG Internship 9 Frontend Task</p>

                <img className="foot-img" src="./assets/Ingressive-for-good.png" alt="" />

            </footer>

        </div>
    );

}

export default contact;