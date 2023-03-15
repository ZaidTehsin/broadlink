import React from 'react'

const ContactUs = () => {
    return (

        <div className="bg-cover bg-center bg-gradient-to-b from-gray-100 to-gray-200 py-32 sm:py-10 px-4">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-center font-bold text-gray-800 mb-8 py-5">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg text-gray-700 mb-4">
                            If you have any questions or feedback, please feel free to reach
                            out to us. We'd love to hear from you!
                        </p>
                        <ul className="list-disc list-inside">
                            <li className="mb-2">
                                <span className="font-bold">Address:</span> 123 Main St, Anytown
                                PAK
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">Phone:</span> (123) 456-7890
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">Email:</span>{" "}
                                info@example.com
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    placeholder="Enter your message"
                                    rows="5"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs
