import clsx from 'clsx';
import React from 'react';

function Project({toggle}) {
    return (
        <div className="container px-4 w-full mx-auto lg:py-0 py-4">
            <div className="bg-[#CBD5E0]/50 py-4 rounded-lg">
                <div> <p
                    className={clsx('',
                        {
                            'text-[20px] font-medium text-white text-center uppercase leading-8': toggle,
                            'text-[20px] font-medium text-[#2b1d10] text-center uppercase leading-8': !toggle,
                        }
                    )}> Projects </p> </div>
            </div>
            <div className="relative w-full pl-[30px] my-[30px]">
                <div
                    className={clsx('',
                        {
                            'absolute line w-[1px] h-full bg-white top-0 left-0': toggle,
                            'absolute line w-[1px] h-full bg-[#aeadad] top-0 left-0': !toggle,
                        }
                    )} />
                <div className="">
                    <p
                        className={clsx('',
                            {
                                'text-white uppercase leading-8 font-extrabold text-[18px]': toggle,
                                'text-[#2b1d10] uppercase leading-8 font-extrabold text-[18px]': !toggle,
                            }
                        )}>E-commerce user page platform</p>
                    <p className={clsx('',
                        {
                            'text-white leading-8 font-light text-[16px]': toggle,
                            'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                        }
                    )}>Technologies and Tools used : Vite, Axios, RestfulAPI, ReactJs, Javascript, HTML5, TailwindCSS, React Router Dom, React Hook, Heroicons, Tabler-icons, React-icons</p>
                    <img src="https://imgur.com/8PCSQGg" />
                </div>
                <div className="mt-8">
                    <p
                        className={clsx('',
                            {
                                'text-white uppercase leading-8 font-extrabold text-[18px]': toggle,
                                'text-[#2b1d10] uppercase leading-8 font-extrabold text-[18px]': !toggle,
                            }
                        )}>Educational website id.icankid.vn</p>
                    <p className={clsx('',
                        {
                            'text-white leading-8 font-light text-[16px]': toggle,
                            'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                        }
                    )}>Technologies and Tools used: Vite, Axios, RestfulAPI, ReactJs, Javascript, HTML5, TailwindCSS, React Router Dom, React Hook, AntD</p>
                    <img src="https://imgur.com/5ZmR1B7" />
                </div>
                <div className="mt-8">
                    <p
                        className={clsx('',
                            {
                                'text-white uppercase leading-8 font-extrabold text-[18px]': toggle,
                                'text-[#2b1d10] uppercase leading-8 font-extrabold text-[18px]': !toggle,
                            }
                        )}>Educational website e-learning.youpass.vn</p>
                    <p className={clsx('',
                        {
                            'text-white leading-8 font-light text-[16px]': toggle,
                            'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                        }
                    )}>Technologies and Tools used: Vite, Axios, RestfulAPI, ReactJs, Javascript, HTML5, TailwindCSS, React Router Dom, React Hook, AntD</p>
                    <img src="https://imgur.com/94VvmUM" />
                </div>
            </div>
        </div>
    );
}

export default Project;
