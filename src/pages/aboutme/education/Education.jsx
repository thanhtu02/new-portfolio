import clsx from 'clsx';
import React from 'react';

function Education({ toggle }) {
    // console.log(toggle)

    return (
        <div className="container px-4 w-full mx-auto mt-8 md:mt-0">
            <div className="bg-[#CBD5E0]/50 py-4 rounded-lg">
                <div> <p
                    className={clsx('',
                        {
                            'text-[20px] font-medium text-white text-center uppercase leading-8': toggle,
                            'text-[20px] font-medium text-[#2b1d10] text-center uppercase leading-8': !toggle,
                        }
                    )}> Education </p> </div>
            </div>
            <div className="relative w-full pl-[30px] my-[30px]">
                <div
                    className={clsx('',
                        {
                            'absolute line w-[1px] h-full bg-white top-0 left-0': toggle,
                            'absolute line w-[1px] h-full bg-[#aeadad] top-0 left-0': !toggle,
                        }
                    )}
                />
                <div className="">
                    <p
                        className={clsx('',
                            {
                                'text-white uppercase leading-8 font-extrabold text-[18px]': toggle,
                                'text-[#2b1d10] uppercase leading-8 font-extrabold text-[18px]': !toggle,
                            }
                        )}
                    >2020-2024</p>
                    <p
                        className={clsx('',
                            {
                                'text-white leading-8 font-light text-[16px]': toggle,
                                'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                            }
                        )}
                        >Studing Information System (IS) at
                        University Of Information Technology, VNU</p>
                </div>
            </div>
        </div>
    );
}

export default Education;
