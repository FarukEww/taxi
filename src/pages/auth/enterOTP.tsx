import React, { useState } from 'react'
import OtpInput from 'react-otp-input';

const enterOTP = () => {
    const [otp, setOtp] = useState('');
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col items-start space-y-7'>
                <div>
                    <p className='text-2xl w-80 font-bold'>Enter the 4-Digit code sent you at @email</p>
                </div>
                <div>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        inputType='tel'
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{
                            width: "50px",
                            height: "50px",
                            margin: "0 0.25rem",
                            padding: "0.5rem",
                            borderRadius: "10px",
                            border: "1px solid #c6c9cf",
                            textAlign: "center",
                            fontSize: "1.3rem",
                            backgroundColor: "#EEEEEE",
                            outline: "rgb(209 213 219)",
                            alignItems: "start"
                        }}
                    />
                    <p className='text-xs ml-2 mt-2'>Tip: Make sure to check your inbox and spam folders</p>
                </div>
                <div>
                    <button className='bg-[#EEEEEE] rounded-xl p-1.5'>Resend</button>
                </div>
            </div>
        </div>
    )
}

export default enterOTP
