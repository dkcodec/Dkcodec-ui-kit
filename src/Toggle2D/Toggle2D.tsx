import React, { FC } from 'react'
import './Toggle2D.css'

export interface Toggle2DProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  btnColor?: string
  toggleSize?: '2xl' | 'xl' | 'lg' | 'md' | 'sm'
  background?: string
  additionalClass?: string
  borderColor?: string
  children?: React.ReactNode
}

const Toggle2D: FC<Toggle2DProps> = ({
  children,
  btnColor,
  background,
  borderColor = 'black',
  toggleSize = 'md',
  additionalClass = '',
  ...props
}) => {
  const rootClasses = ['switch']
  let br = '1rem'

  switch (toggleSize) {
    case '2xl':
      rootClasses.push('big-toggle-2xl')
      br = '2rem'
      break
    case 'xl':
      rootClasses.push('big-toggle-xl')
      br = '1.5rem'
      break
    case 'lg':
      rootClasses.push('big-toggle-lg')
      br = '1.2rem'
      break
    case 'sm':
      rootClasses.push('big-toggle-sm')
      br = '0.75rem'
      break
    default:
      rootClasses.push('big-toggle-md')
  }
  return (
    <label className={rootClasses.join(' ')}>
      <input type='checkbox' {...props} />
      <span className='slider'></span>
    </label>
  )
}

export default Toggle2D
