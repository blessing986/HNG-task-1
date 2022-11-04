import React from "react";

function contact() {

    return (

        <div>

            <section className="flex justify-center items-center my-10 md:my-20 mx-4 md:mx-0">

                <div className="flex flex-col">

                    <div className="mb-4">

                        <h1 className="font-bold text-2xl">Contact Me</h1>
                        <p className="text-gray-500 text-lg mt-3">Hi there, contact me to ask me about anything you have in mind.
                        </p>

                    </div>

                    <form action="#">

                        <div className="md:flex">

                            <div className="md:mr-6 mr-0">

                                <label for="first_name" className="font-semibold text-gray-700">First name</label>

                                <input type="text" placeholder="Enter your first name" id="first_name"
                                    className="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-20 mt-2" />

                            </div>

                            <div>

                                <label for="last_name" className="font-semibold text-gray-700">Last name</label>

                                <input type="text" placeholder="Enter your last name" id="last_name"
                                    className="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-20 mt-2" />

                            </div>

                        </div>

                        <div className="mt-4">

                            <label for="email" className="font-semibold text-gray-700">Email</label>

                            <input type="email" placeholder="yourname@email.com" id="email"
                                className="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-20 mt-2" />

                        </div>

                        <div className="flex flex-col mt-4">

                            <label for="message" className="font-semibold text-gray-700">Message</label>

                            <textarea name="message" id="message" cols="30" rows="5"
                                placeholder="Send me a message and i'll reply you as soon as possible..."
                                className="border border-gray-300 rounded-lg pt-3 pl-3 mt-2"></textarea>

                        </div>

                        <div className="mt-4">

                            <input type="checkbox" id="check" className="h-4 w-4" />

                            <label for="check" className="ml-2 text-gray-500">You agree to providing your data to Blessing_U who may
                                contact you</label>

                        </div>

                        <button className="bg-blue-600 rounded text-white font-bold p-2 w-full mt-6" id="btn__submit">Send message</button>


                    </form>

                </div>


            </section>
        </div>
    );

}

export default contact;