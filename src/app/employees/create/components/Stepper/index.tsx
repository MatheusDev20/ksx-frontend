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
    <div className="flex flex-col w-full gap-6 p-3">
      {/* Stepper  */}
      <MuiStepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={`label-${index}`}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </MuiStepper>
      <StepLayout>{getCurrentStep(activeStep)}</StepLayout>
      {/* Reach the final step */}
      {activeStep === steps.length ? (
        <div>
          <FinalStep />
        </div>
      ) : (
        <div className="items-center justify-center flex">
          <div className="flex w-1/4 justify-between p-2">
            {activeStep !== 0 && (
              <Button
                variant="contained"
                className="text-white font-semibold bg-blue-500"
                sx={{ color: 'red', mr: 1 }}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
            )}
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

type StepLayoutProps = {
  children: React.ReactNode
}
export const StepLayout = ({
  children,
}: StepLayoutProps): React.JSX.Element => {
  return <div className="flex p-3">{children}</div>
}
