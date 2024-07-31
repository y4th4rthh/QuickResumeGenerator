import React from 'react';
import { useNavigate } from 'react-router-dom';


const AboutUs = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }

    const handleNavigateToResumeData = () => {
        navigate('/');
    };

    return (
        <div className='font-rubik'>
            <nav
                className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 "
            >
                <div
                    className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
                >
                    <a
                        onClick={() => navigate('/')}
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://img.icons8.com/?size=100&id=TF9VCgblG6vy&format=png&color=000000"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap text-[#4e31aa]"
                        >
                            QuickResume
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="text-white bg-[#4e31aa] hover:bg-[#372379] focus:ring-4 focus:outline-none focus:ring-[#4e31aa] font-medium rounded-lg text-sm px-4 py-2 text-center "
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="{2}"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >
                        <ul
                            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white "
                        >
                            <li>
                                <a
                                    href="#"
                                    onClick={handleNavigateToResumeData}
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4e31aa] md:p-0  "
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white bg-[#4e31aa] rounded md:bg-transparent hover:text-[#4e31aa] md:text-[#4e31aa] md:p-0 "
                                    aria-current="page"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4e31aa] md:p-0"
                                    onClick={() => navigate('/contactus')}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="bg-white mt-11">
                <section className="bg-[#4e31aa] text-white text-center py-20 px-4">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg">Learn more about our mission, values, and team.</p>
                </section>

                <section className="text-center py-12 px-4">
                    <h2 className="text-2xl font-bold">Our Story</h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        We started with a vision to simplify the job application process. Our journey began a decade ago, and today we are proud to serve millions of job seekers worldwide.
                    </p>
                </section>

                <section className="bg-[#4e31aa] text-white py-12 px-4">
                    <h2 className="text-2xl font-bold text-center">Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                        <div className="p-4 shadow-lg rounded-lg bg-[#654bbb] hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold">Innovation</h3>
                            <p className="text-white mt-2">
                                We continuously innovate to bring the best resume-building tools to our users.
                            </p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-[#654bbb] hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold">Accessibility</h3>
                            <p className="text-white mt-2">
                                Making our tools accessible to everyone, everywhere is a key part of our mission.
                            </p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-[#654bbb] hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold">User-Centric</h3>
                            <p className="text-white mt-2">
                                Our users are at the heart of everything we do. We design our tools with them in mind.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-center py-12 px-4">
                    <h2 className="text-2xl font-bold">Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                        <div className="p-4 shadow-lg rounded-lg  hover:bg-[#7769a5] bg-[#a997df]  hover:text-white transition-colors">
                            <h3 className="text-xl font-bold">XYZ</h3>
                            <p className=" ">Founder & CEO</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg hover:bg-[#7769a5] bg-[#a997df]  hover:text-white transition-colors">
                            <h3 className="text-xl font-bold">XYZ</h3>
                            <p className="">Chief Technology Officer</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg hover:bg-[#7769a5] bg-[#a997df]  hover:text-white transition-colors">
                            <h3 className="text-xl font-bold">XYZ</h3>
                            <p className="">Head of Design</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg hover:bg-[#7769a5] bg-[#a997df]  hover:text-white transition-colors">
                            <h3 className="text-xl font-bold">XYZ</h3>
                            <p className="">Marketing Director</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-12 px-4">
                    <h2 className="text-2xl font-bold text-center">Our Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
                        <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold">Award-Winning Tools</h3>
                            <p className="text-gray-700 mt-2">
                                Recognized globally for our innovative and user-friendly resume-building tools.
                            </p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold">Global Reach</h3>
                            <p className="text-gray-700 mt-2">
                                Helping job seekers in over 50 countries with multi-language support.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-center bg-[#4e31aa] py-12 px-4">
                    <h2 className="text-2xl font-bold text-white">Our Commitment</h2>
                    <p className="mt-4 text-white max-w-2xl mx-auto">
                        We are committed to providing the best tools and resources to help job seekers achieve their career goals.
                    </p>
                </section>
                <hr/>
                <footer className=" text-white bg-[#4e31aa] text-center py-8">
                    <div className="text-sm">
                        Made with ❤️ by <a href="https://youtu.be/dQw4w9WgXcQ?si=WLP_oyA5nwSQ2dbF" className='text-white'>yatharth</a>
                    </div>
                </footer>
            </div>


        </div>
    )
};
export default AboutUs;