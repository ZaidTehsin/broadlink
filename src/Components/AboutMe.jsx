import React from 'react';
import backgroundImageUrl from '../Assets/isp.jpg';
import RightImg from '../Assets/1.jpg';

const AboutMe = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 w-full flex flex-col"
                style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: "cover",}}>

                  <div className='max-w-[400px] lg:max-w-[1200px] sm:max-w-[600px] md:py-[80] py-5 sm:mt-16 mt-32 flex mx-auto lg:flex-row flex-col text-center lg:text-left items-center bg-white rounded-lg shadow-2xl'>
                    <div className='basis-[45%] pb-5'>
                        <img className='w-[80%] mx-auto shadow-xl rounded-md mt-2 border-2 border-indigo-500' src={RightImg} alt="/" /></div>
                        
                        <div className='basis-[55%] px-5 mr-5 py-2 rounded-lg '>
                            <h1 className='text-lg md:text-xl pb-5 font-bold'>BroadLink Networks is a leading internet service provider</h1>
                            <p className='py-3'>Our team at BroadLink Networks is made up of experienced and dedicated professionals who are passionate about providing the best possible service to our customers. We understand that the internet has become an essential part of everyday life, and we are committed to ensuring that our customers have access to fast, reliable, and affordable internet services.</p>
                            <p className='py-3'>We work hard to maintain our network infrastructure and invest in the latest technology to provide our customers with the best possible internet experience.</p>
                            <p className='py-3'>In conclusion, BroadLink Networks is a reliable and trustworthy internet service provider that is committed to providing high-speed internet services to customers across the country.</p>

                        </div>
                        </div>  



            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid lg:gap-8">
                    <div className="lg:col-span-1"></div>
                    <div className="lg:col-span-2">
                        <div className="bg-white shadow-2xl rounded-lg mb-8">
                            <div className="p-8">
                                <h3 className="text-4xl text-center font-bold mb-8">Company Vision</h3>
                                <p className="leading-loose mb-6">
                                    At BroadLink Networks, we are dedicated to providing our customers with fast, reliable, and affordable internet services. Our team is made up of experienced professionals who are passionate about delivering the best possible service to our customers. We understand that the internet has become an essential part of everyday life, and we are committed to ensuring that our customers have access to the latest technology and top-notch support.
                                </p>
                                <p className="leading-loose mb-6">
                                    Our fiber optic technology is the backbone of our network, providing lightning-fast internet connections that are second to none. Unlike traditional copper wire connections, fiber optic technology allows us to transmit data over long distances without any loss of speed or quality. This means that our customers can enjoy seamless internet connections, even during peak usage hours.
                                </p>
                                <p className="leading-loose">
                                    At BroadLink Networks, we believe in providing personalized service and support to our customers. Our dedicated customer service team is available 24/7 to answer your questions, provide technical support, and help you get the most out of our services. We understand that our customers have different needs and requirements, and we are always happy to work with you to find the best solution for your specific situation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;