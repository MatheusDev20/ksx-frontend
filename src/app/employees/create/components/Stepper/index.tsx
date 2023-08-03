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
import {
  StepValues,
  useCreateEmployeeForm,
} from '@/app/contexts/create-employee-form'
import {
  stepOneSchema,
  stepTwoSchema,
} from '@/app/validations/schemas/create-employee-scema'
import { ObjectSchema } from 'yup'
import { CreateEmployeeForm } from '@/@types/employees'
import { ValidationResult } from '@/@types/yup'

export const Stepper = (): React.JSX.Element => {
  const { formData } = useCreateEmployeeForm()
  const [activeStep, setActiveStep] = React.useState(1)
  const [errors, setErrors] = useState<{ [key: string]: string[] } | null>(null)

  const getCurrentStep = (currStep: number) => {
    switch (currStep) {
      case 0:
        return <StepOne errors={errors} />

      case 1:
        return <StepTwo errors={errors} />

      case 2:
        return <StepThree />
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleNext = async () => {
    const { veredict, errors } = await validateCurrentStep(formData, activeStep)
    if (!veredict) {
      setErrors(errors)
      return
    }
    setErrors(null)
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
/* Step Layout */
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
): Promise<ValidationResult> => {
  let validation: ValidationResult = { veredict: true, errors: null }
  switch (currStep) {
    case 0:
      validation = await validateStep(formData.stepOne, stepOneSchema)
      break

    case 1:
      validation = await validateStep(formData.stepTwo, stepTwoSchema)
      break

    default:
      return { veredict: false, errors: null }
  }

  return validation
}

const validateStep = async (
  stepData: StepValues,
  schema: ObjectSchema<any>,
): Promise<ValidationResult> => {
  try {
    await schema.validate(stepData, { abortEarly: false })
    return { veredict: true, errors: null }
  } catch (err: any) {
    const { inner } = err
    const errorMap: { [key: string]: string[] } = {}
    inner.forEach((error: any) => {
      const { path, errors } = error
      errorMap[path] = errors
    })
    return {
      veredict: false,
      errors: errorMap,
    }
  }
}
