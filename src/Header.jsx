import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {        
        navigate('/');
    }
    return (
        <nav
            className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200  font-rubik"
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
                        className="self-center text-2xl font-semibold whitespace-nowrap text-[#4e31aa] "
                    >
                        QuickResume
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="text-white bg-[#4e31aa] hover:bg-[#372379] focus:ring-4 focus:outline-none focus:ring-[#4e31aa] font-medium rounded-lg text-sm px-4 py-2 text-center"
                        onClick={handleLogout}
                    >
                        Log Out
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
                    >
                        <li>
                            <a
                                
                                className="block py-2 px-3 text-white bg-[#4e31aa] rounded md:bg-transparent md:text-[#4e31aa] hover:text-[#4e31aa] md:p-0 "
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4e31aa] md:p-0"
                                onClick={() => navigate('/search')}
                            >
                                Get Existing Datas
                            </a>
                        </li>
                       
                        <li>
                            <a
                                onClick={() => navigate('/contactuss')}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4e31aa] md:p-0"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}; export default Header;
