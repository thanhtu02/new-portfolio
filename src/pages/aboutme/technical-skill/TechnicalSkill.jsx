import clsx from 'clsx';
import React from 'react';

function TechnicalSkill({ toggle }) {
    return (
        <div className="container px-4 w-full mx-auto">
            <div className="bg-[#CBD5E0]/50 py-4 rounded-lg">
                <div> <p
                    className={clsx('',
                        {
                            'text-[20px] font-medium text-white text-center uppercase leading-8': toggle,
                            'text-[20px] font-medium text-[#2b1d10] text-center uppercase leading-8': !toggle,
                        }
                    )}
                > Technical skill </p> </div>
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
                        )}
                    >Programming Languages</p>
                    <p
                        className={clsx('',
                            {
                                'text-white uppercase leading-8 font-medium text-[16px]': toggle,
                                'text-[#2b1d10] uppercase leading-8 font-medium text-[16px]': !toggle,
                            }
                        )}
                    >HTML, CSS, Javascript</p>
                    <p
                        className={clsx('',
                            {
                                'text-white leading-8 font-light text-[16px]': toggle,
                                'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                            }
                        )}>I'm quite confident that I can catch up with other languages when needed very quickly.</p>
                </div>
                <div className="mt-8">
                    <p className={clsx('',
                        {
                            'text-white uppercase leading-8 font-extrabold text-[18px]': toggle,
                            'text-[#2b1d10] uppercase leading-8 font-extrabold text-[18px]': !toggle,
                        }
                    )}>Web Front-end Technologies</p>
                    <p
                        className={clsx('',
                            {
                                'text-white leading-8 font-light text-[16px]': toggle,
                                'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                            }
                        )}>ReactJS, TailwindCSS, Axios, Vite, Auth0, Responsive Design</p>
                </div>
                <div className="mt-8">
                    <p className={clsx('',
                        {
                            'text-white uppercase leading-8 font-extrabold text-[18px]': toggle,
                            'text-[#2b1d10] uppercase leading-8 font-extrabold text-[18px]': !toggle,
                        }
                    )}>Industrial & Interpersonal Skills</p>
                    <li
                        className={clsx('',
                            {
                                'text-white leading-8 font-light text-[16px]': toggle,
                                'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                            }
                        )}>
                        Highly self-study
                    </li>
                    <li className={clsx('',
                        {
                            'text-white leading-8 font-light text-[16px]': toggle,
                            'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                        }
                    )}>
                        Researching & applying new technologies
                    </li>
                    <li className={clsx('',
                        {
                            'text-white leading-8 font-light text-[16px]': toggle,
                            'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                        }
                    )}>
                        Solving issues
                    </li>
                    <li className={clsx('',
                        {
                            'text-white leading-8 font-light text-[16px]': toggle,
                            'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                        }
                    )}>
                        Highly adaptable
                    </li>
                    <li className={clsx('',
                        {
                            'text-white leading-8 font-light text-[16px]': toggle,
                            'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                        }
                    )}>
                        Teamwork & Communication</li>
                </div>
                <div className="mt-8">
                    <p className={clsx('',
                        {
                            'text-white uppercase leading-8 font-extrabold text-[18px]': toggle,
                            'text-[#2b1d10] uppercase leading-8 font-extrabold text-[18px]': !toggle,
                        }
                    )}>Foreign Languages</p>
                    <p className={clsx('',
                        {
                            'text-white leading-8 font-light text-[16px]': toggle,
                            'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                        }
                    )}>English (Reading, Speaking, Listening, Writing)</p>
                </div>
            </div>
        </div>
    );
}

export default TechnicalSkill;
