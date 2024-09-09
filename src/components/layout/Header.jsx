import React, { useEffect, useState } from 'react';
import { BaseLineIcon, MoonIcon, SunIcon, XIcon } from '../../assets/icons/svg';
import clsx from 'clsx';

function Header({ toggle, toggleBackground }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="fixed top-[2%] left-0 translate-x-1/2 z-10">
                <button
                    onClick={toggleMenu}
                    className="bg-white rounded-full flex justify-center items-center p-3">
                    <BaseLineIcon />
                </button>
            </div>
            {isOpen && (
                <div className="bg-gray-800/50 fixed inset-0 z-50">
                    <div className="relative w-full h-full" onClick={toggleMenu}>
                        <div
                            className="bg-white absolute w-full max-w-[260px] h-screen"
                        >
                            <div className="w-full flex justify-end">
                                <button
                                    className="p-2"
                                    onClick={toggleMenu}>
                                    <XIcon className="ml-auto" />
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-[30px]">
                                <button>
                                    <a href="#home" className="text-[17px] hover:text-[19px] focus:font-semibold transition-transform duration-700 ease-in-out transform hover:scale-105 focus:underline focus:underline-offset-1">
                                        Home
                                    </a>
                                </button>
                                <button>
                                    <a href="#about-me" className="text-[17px] hover:text-[19px] focus:font-semibold transition-transform duration-700 ease-in-out transform hover:scale-105 focus:underline focus:underline-offset-1">
                                        About me
                                    </a>
                                </button>
                                <button>
                                    <a href="#projects" className="text-[17px] hover:text-[19px] focus:font-semibold transition-transform duration-700 ease-in-out transform hover:scale-105 focus:underline focus:underline-offset-1">
                                        Projects
                                    </a>
                                </button>
                                <button>
                                    <a href="#contact-us" className="text-[17px] hover:text-[19px] focus:font-semibold transition-transform duration-700 ease-in-out transform hover:scale-105 focus:underline focus:underline-offset-1">
                                        Contact
                                    </a>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
            <div className="container px-4 w-full mx-auto py-[12px]">
                <div className="flex justify-around items-center gap-[65px]">
                    <div className="">
                        <p className={clsx(
                            {
                                'text-[17px] text-white font-medium': toggle,
                                'text-[17px] font-medium text-[#2b1d10]': !toggle,
                            }
                        )}>Portfolio</p>
                    </div>
                    <div className="flex justify-center items-center gap-8">
                        <div className="flex justify-center items-center gap-2">
                            <a href="https://web.facebook.com/hee.han.3133/?locale=vi_VN">
                                <img src="https://i.pinimg.com/564x/b5/9d/15/b59d15f1d09ebd9882cad4a448688aac.jpg"
                                    className="w-5 h-5 rounded-[4px]"
                                    alt="Duong-dan-Facebook-khong-chia-se" />
                            </a>
                            <a href="https://instagram.com/xzaiyu?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr">
                                <img
                                    src="https://i.pinimg.com/564x/f7/9c/5d/f79c5df041ac67c0ce4fddc4b039037b.jpg"
                                    className="w-5 h-5 rounded-[4px]"
                                    alt="Duong-dan-Instagram" />
                            </a>
                            <a href="http://linkedin.com/in/thanh-tu-456413275">
                                <img src="https://i.pinimg.com/564x/29/fe/f9/29fef91506c1750b02a2541b3f73f8d2.jpg"
                                    className="w-5 h-5 rounded-[4px]"
                                    alt="Duong-dan-Linkedin" />
                            </a>
                        </div>
                        <div>
                            <button className="bg-sky-400 flex justify-center items-center p-1 rounded-lg"
                                onClick={toggleBackground}>
                                {toggle ? <MoonIcon /> : <SunIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
