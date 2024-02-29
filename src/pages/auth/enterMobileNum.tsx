import React from 'react'

const enterMobileNum = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="flex flex-col items-start space-y-7">
                <div className='space-y-3'>
                    <div className="font-bold text-2xl">
                        <p className=''>Enter your mobile number</p>
                        <p>(Optional)</p>
                    </div>
                    <div className='text-xs'>
                        <p>add your mobile number to aid in account recovery</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center '>
                    <div>
                        <select name="country" id="country" className='rounded  font-semibold text-base'>
                            <option value="india">IN</option>
                            <option value="usa">USA</option>
                            <option value="africa">AF</option>
                            <option value="europe">EU</option>
                        </select>
                    </div>
                    <div className='h-full relative'>
                        <input
                            type="mobile_num"
                            name="mobile_num"
                            id='mobile_num'
                            placeholder='Mobile Number'
                            className='py-2 pl-9 px-3 border w-full bg-[#EEEEEE] rounded-md'
                        />
                        <p className='h-[3rem] pl-1 absolute top-2 items-center'>+91</p>
                    </div>
                </div>
                <div>
                    <button className='bg-[#EEEEEE] rounded-xl p-1.5'>Skip</button>
                </div>

            </div>
        </div>
    )
}

export default enterMobileNum
