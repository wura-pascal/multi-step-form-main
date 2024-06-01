import './App.css';
import StepOne from './src/Components/forms/step_one'
import StepTwo from './src/Components/forms/step_two'
import StepThree from './src/Components/forms/step_three'
import StepFour from './src/Components/forms/step_four'
import { Component } from 'react'

const steps = [{id: 1, Component: <StepOne />}]
function App() {
  return (
    <>
    <div className="flex items-center justify-center max-w-[1300px] mx-auto">
      <div className="basis-[30%] bg-red-500">Side bar</div>
      <div className="basis-[70%] bg-green-500 h-full">Personal info</div>
      <div className='w-[90%] mx-auto'>
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </div>
    </div>
    </>
  )
}

export default App
