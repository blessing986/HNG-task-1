import React from "react";

function contact() {

    return (

        <div>
            <section class="flex justify-center items-center my-10 md:my-20 mx-4 md:mx-0">

                <div class="flex flex-col">

                    <div class="mb-4">

                        <h1 class="font-bold text-2xl">Contact Me</h1>
                        <p class="text-gray-500 text-lg mt-3">Hi there, contact me to ask me about anything you have in mind.
                        </p>

                    </div>

                    <form action="#">

                        <div class="md:flex">

                            <div class="mr-6">

                                <label for="first_name" class="font-semibold text-gray-700">First name</label>

                                <input type="text" placeholder="Enter your first name" id="first_name"
                                    class="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-20 mt-2" />

                            </div>

                            <div>

                                <label for="last_name" class="font-semibold text-gray-700">Last name</label>

                                <input type="text" placeholder="Enter your last name" id="last_name"
                                    class="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-20 mt-2" />

                            </div>

                        </div>

                        <div class="mt-4">

                            <label for="email" class="font-semibold text-gray-700">Email</label>

                            <input type="email" placeholder="yourname@email.com" id="email"
                                class="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-20 mt-2" />

                        </div>

                        <div class="flex flex-col mt-4">

                            <label for="message" class="font-semibold text-gray-700">Message</label>

                            <textarea name="message" id="message" cols="30" rows="5"
                                placeholder="Send me a message and i'll reply you as soon as possible..."
                                class="border border-gray-300 rounded-lg pt-3 pl-3 mt-2"></textarea>

                        </div>

                        <div class="mt-4">

                            <input type="checkbox" id="check" class="h-4 w-4" />

                            <label for="check" class="ml-2 text-gray-500">You agree to providing your data to Blessing_U who may
                                contact you</label>

                        </div>

                        <button class="bg-blue-600 rounded text-white font-bold p-2 w-full mt-6" id="btn__submit">Send message</button>


                    </form>

                </div>


            </section>
        </div>
    );

}

export default contact;