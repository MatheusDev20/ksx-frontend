'use client'

import React from 'react'
import { Button, Stepper as MuiStepper, Step, StepLabel } from '@mui/material'
import {
  StepFour as FinalStep,
  StepOne,
  StepThree,
  StepTwo,
  steps,
} from '../Steps'

export const getCurrentStep = (currStep: number) => {
  switch (currStep) {
    case 0:
      return <StepOne />

    case 1:
      return <StepTwo />

    case 2:
      return <StepThree />
  }
}
export const Stepper = (): React.JSX.Element => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  return (
    <div className="flex flex-col w-full">
      {/* Stepper  */}
      <MuiStepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </MuiStepper>
      <div>{getCurrentStep(activeStep)}</div>
      {/* Reach the final step */}
      {activeStep === steps.length ? (
        <div>
          <FinalStep />
        </div>
      ) : (
        <div className="border border-solid border-red-700 items-center justify-center flex p-3">
          <div className="flex w-1/4 justify-between p-2">
            <Button
              variant="contained"
              className="text-white font-semibold bg-blue-500"
              sx={{ color: 'red', mr: 1 }}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              className="text-white font-semibold bg-blue-500"
              variant="contained"
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
