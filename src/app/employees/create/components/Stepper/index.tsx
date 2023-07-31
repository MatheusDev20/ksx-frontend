'use client'

import React, { useState } from 'react'
import { Button, Stepper as MuiStepper, Step, StepLabel } from '@mui/material'
import {
  StepFour as FinalStep,
  StepOne,
  StepThree,
  StepTwo,
  steps,
} from '../Steps'
import { useCreateEmployeeForm } from '@/app/contexts/create-employee-form'
import { stepOneSchema } from '@/app/validations/schemas/create-employee-scema'
import { ObjectSchema } from 'yup'
import { CreateEmployeeForm } from '@/@types/employees'

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
  const { formData } = useCreateEmployeeForm()

  const [activeStep, setActiveStep] = React.useState(0)
  const [error, setError] = useState<boolean>(false)

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleNext = async () => {
    if (!(await validateCurrentStep(formData, activeStep))) {
      setError(true)
      return
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  return (
    <div className="flex flex-col w-full gap-6 p-3">
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
            {error && <span>Erro</span>}
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

const validateCurrentStep = async (
  formData: CreateEmployeeForm,
  currStep: number,
): Promise<boolean> => {
  // eslint-disable-next-line no-unused-vars
  let isStepValid = false

  switch (currStep) {
    case 0:
      isStepValid = await validateStep(formData.stepOne, stepOneSchema)
      break

    default:
      return false
  }
  return isStepValid
}
const validateStep = async (stepData: any, schema: ObjectSchema<any>) => {
  try {
    console.log(stepData)
    await schema.validate(stepData, { abortEarly: false })
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}
