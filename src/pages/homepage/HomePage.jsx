import clsx from 'clsx';
import React from 'react';

function HomePage({ toggle }) {
    // console.log(toggle)
    return (
        <div className="container px-4 w-full mx-auto flex justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="">
                    <p className="text-[36px] text-[#663399] font-bold"> Truong Nguyen Thanh Tu </p>
                    <p
                        className={clsx('',
                            {
                                'text-[20px] font-medium text-white': toggle,
                                'text-[20px] font-medium text-[#2b1d10]': !toggle,
                            }
                        )}
                    > Frontend Developer </p>
                    <p
                        className={clsx('',
                            {
                                'text-white leading-8 font-light text-[16px]': toggle,
                                'text-[#2b1d10] leading-8 font-light text-[16px]': !toggle,
                            }
                        )}
                    > "Hi, I'm a coder girl from Binh Phuoc who can code all day without getting tired.
                        I found programming was extremely amazing and it satisfied my passion for using computer day by day."</p>
                </div>
                <div className="">
                    <img src="https://i.pinimg.com/originals/8d/ed/fa/8dedfab00632cdab169124432cc2c22e.png"
                    className="w-auto h-auto" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
