import React, { useState, useEffect } from 'react';

const EmailVerification = ({ onVerify }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timer, setTimer] = useState(120);
  const [otpCode] = useState('123456'); // Example OTP code

  const handleVerifyEmail = () => {
    // Simulate sending an OTP
    console.log(`OTP sent to: ${email}`);
    setOtpSent(true);
    setAttempts(0); // Reset attempts when OTP is sent
  };

  const handleVerifyOtp = () => {
    if (attempts < 5) {
      if (otp === otpCode) {
        setIsCorrect(true);
        onVerify(true); // Call onVerify function passed as prop
      } else {
        setIsCorrect(false);
        setAttempts(prev => prev + 1);
      }
    }
  };

  const handleResendOtp = () => {
    if (timer === 0) {
      handleVerifyEmail();
      setTimer(120); 
    }
  };

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <input
        type="email"
        placeholder="Email address"
        className="w-full px-4 py-2 text-lg text-black font-semibold outline-none rounded-xl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleVerifyEmail}
        className="w-full px-4 py-2 bg-violet-700 text-white rounded-xl hover:bg-violet-800 transition duration-200"
        disabled={otpSent}
      >
        Verify Email
      </button>
      {otpSent && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full px-4 py-2 text-lg text-black font-semibold outline-none rounded-xl"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            onClick={handleVerifyOtp}
            className="w-full px-4 py-2 bg-violet-700 text-white rounded-xl hover:bg-violet-800 transition duration-200"
          >
            Validate OTP
          </button>
          {isCorrect !== null && (
            <span className={`text-xl ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? '✅' : '❌'}
            </span>
          )}
          <button
            onClick={handleResendOtp}
            className="w-full px-4 py-2 bg-gray-300 text-black rounded-xl hover:bg-gray-400 transition duration-200"
            disabled={timer > 0}
          >
            {timer > 0 ? `Resend OTP (${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60})` : 'Resend OTP'}
          </button>
          {attempts >= 5 && <p className="text-red-500">Maximum attempts reached. Please try again later.</p>}
        </>
      )}
    </div>
  );
};

export default EmailVerification;
