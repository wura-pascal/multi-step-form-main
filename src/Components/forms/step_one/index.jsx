import React from 'react'

function StepOne() {
  return (
    <div>
        <h1>Personal Info</h1>
        <p>please provide your name, email address, and phone number .</p>
        <div>
            <Input />
            <Input />
            <Input />
            <Button />
        </div>
    </div>
  )
}

export default StepOne