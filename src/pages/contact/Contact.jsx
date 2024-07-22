import clsx from 'clsx';
import React from 'react';

function Contact({ toggle }) {
    return (
        <div className="container px-4 w-full mx-auto flex flex-col lg:flex-row">
            <div className="w-full ">
                <div>
                    <p
                    className={clsx('',
                        {
                            'text-white lg:text-[62px] text-[32px] font-extrabold leading-24': toggle,
                            'text-[#2b1d10] lg:text-[62px] text-[32px] font-extrabold leading-24': !toggle,
                        }
                    )}
                > Let's work <br /> together </p> </div>
                <div className="flex flex-col lg:gap-8 gap-6 lg:mt-8 mt-4">
                    <div><p
                        className={clsx('',
                            {
                                'text-white lg:text-[24px] text-[18px] font-normal leading-24': toggle,
                                'text-[#2b1d10] lg:text-[24px] text-[18px] font-normal leading-24': !toggle,
                            }
                        )}
                    > Mail </p>
                        <p
                            className={clsx('',
                                {
                                    'text-white lg:text-[24px] text-[18px] font-normal leading-24': toggle,
                                    'text-[#2b1d10] lg:text-[24px] text-[18px] font-normal leading-24': !toggle,
                                }
                            )}
                        > hanhee1406@gmail.com </p>
                    </div>
                    <div><p
                        className={clsx('',
                            {
                                'text-white lg:text-[24px] text-[18px] font-normal leading-24': toggle,
                                'text-[#2b1d10] lg:text-[24px] text-[18px] font-normal leading-24': !toggle,
                            }
                        )}
                    > Address </p>
                        <p
                            className={clsx('',
                                {
                                    'text-white lg:text-[24px] text-[18px] font-normal leading-24': toggle,
                                    'text-[#2b1d10] lg:text-[24px] text-[18px] font-normal leading-24': !toggle,
                                }
                            )}
                        > 45/6, Linh Xuan, Thu Duc City</p></div>
                    <div><p
                        className={clsx('',
                            {
                                'text-white lg:text-[24px] text-[18px] font-normal leading-24': toggle,
                                'text-[#2b1d10] lg:text-[24px] text-[18px] font-normal leading-24': !toggle,
                            }
                        )}
                    > Phone </p>
                        <p
                            className={clsx('',
                                {
                                    'text-white lg:text-[24px] text-[18px] font-normal leading-24': toggle,
                                    'text-[#2b1d10] lg:text-[24px] text-[18px] font-normal leading-24': !toggle,
                                }
                            )}
                        > <b>+84</b> 356994865 </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 mt-8">
                <div className="w-full"><input type="text" className="w-full p-2 text-[16px] text-[#484a4c] rounded-[4px]" placeholder="Name" /></div>
                <div className="w-full"><input type="email" className="w-full p-2 text-[16px] text-[#484a4c] rounded-[4px]" placeholder="Email" /></div>
                <div className="w-full"> <textarea className="w-full p-2 text-[16px] text-[#484a4c] rounded-[4px]" rows="4" placeholder="Message"></textarea></div>
                <div className="w-full"><button className="w-full bg-[#e9c521] px-2 py-3"> <p className="w-full text-center text-white font-medium">Submit</p> </button></div>
            </div>
        </div>
    );
}

export default Contact;
