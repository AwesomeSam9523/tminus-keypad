'use client';
import { useState } from 'react'

export default function Home() {
  const [password, setPassword] = useState<string[]>(['', '', '', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pressedButton, setPressedButton] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const correctPassword = process.env.NEXT_PUBLIC_LEVEL_1?.split(",") || [""];

  const handleButtonPress = (value: string) => {
    setPressedButton(value)
    setTimeout(() => setPressedButton(''), 200)

    if (value === '<-') {
      if (currentIndex > 0) {
        const newPassword = [...password]
        newPassword[currentIndex - 1] = ''
        setPassword(newPassword)
        setCurrentIndex(currentIndex - 1)
      }
      return
    }

    if (value === 'AC') {
      setPassword(['', '', '', '', '', ''])
      setCurrentIndex(0)
      return
    }

    if (currentIndex < password.length) {
      const newPassword = [...password];
      newPassword[currentIndex] = value;
      setPassword(newPassword);
      setCurrentIndex(currentIndex + 1);

      if (correctPassword.includes(newPassword.join(""))) {
        setIsCorrect(true);
      }
    }
  }

  const renderDigitButton = (digit: string) => {
    return (
      <button
        className={`w-20 h-20 bg-gray-800 rounded-lg flex justify-center items-center transition-all duration-100
          ${pressedButton === digit ? 'bg-gray-700 scale-95' : 'hover:bg-gray-700'}`}
        onClick={() => handleButtonPress(digit)}
      >
        <div className="text-red-600 text-3xl font-digital drop-shadow-[0_0_8px_rgba(255,46,46,0.6)]">{digit}</div>
      </button>
    )
  }

  if (isCorrect) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 font-digital">
        <div className="w-80 rounded-2xl overflow-hidden bg-black shadow-2xl">
          <div className="bg-black py-5 text-center">
            <h1 className="m-0 text-5xl font-normal tracking-widest text-red-600 drop-shadow-[0_0_10px_rgba(255,46,46,0.8)]">
              T-MINUS
            </h1>
          </div>

          <div className="bg-gray-900 px-5 py-6 text-center">
            <div className="text-gray-500 text-2xl tracking-wider mb-1">
              ACCESS GRANTED
            </div>
            <div className="text-gray-600 text-xl tracking-wider mb-5">
              WELCOME
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 font-digital">
      <div className="w-80 rounded-2xl overflow-hidden bg-black shadow-2xl">
        <div className="bg-black py-5 text-center">
          <h1 className="m-0 text-5xl font-normal tracking-widest text-red-600 drop-shadow-[0_0_10px_rgba(255,46,46,0.8)]">
            T-MINUS
          </h1>
        </div>

        <div className="bg-gray-900 px-5 py-6 text-center">
          <div className="text-gray-500 text-2xl tracking-wider mb-1">
            ENTER PASSWORD
          </div>
          <div className="text-gray-600 text-xl tracking-wider mb-5">
            TO PROCEED
          </div>
          <div className="flex justify-between my-4 mx-2">
            {password.map((digit, index) => (
              <div key={index} className="text-4xl text-red-600 w-8 drop-shadow-[0_0_8px_rgba(255,46,46,0.6)]">
                {digit ? digit : '-'}
              </div>
            ))}
          </div>
          <div className="flex justify-between mx-2">
            {password.map((_, index) => (
              <div key={index} className="w-8 h-1 bg-gray-700"></div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-gray-900 grid grid-cols-3 gap-3">
          {renderDigitButton('1')}
          {renderDigitButton('2')}
          {renderDigitButton('3')}
          {renderDigitButton('4')}
          {renderDigitButton('5')}
          {renderDigitButton('6')}
          {renderDigitButton('7')}
          {renderDigitButton('8')}
          {renderDigitButton('9')}
          {renderDigitButton('AC')}
          {renderDigitButton('0')}
          {renderDigitButton('<-')}
        </div>
      </div>
    </div>
  )
}
