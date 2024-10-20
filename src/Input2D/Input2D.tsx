import React, { FC } from 'react'
import './Input2D.css'

interface Input2DProps extends React.InputHTMLAttributes<HTMLInputElement> {
  textColor?: string
  background?: string
  inputColor?: string
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  additionalClass?: string
  inputSize?: '2xl' | 'xl' | 'lg' | 'md' | 'sm'
}

const Input2D: FC<Input2DProps> = ({
  textColor,
  background,
  inputColor,
  type = 'text',
  placeholder = 'Enter smth...',
  additionalClass,
  inputSize = 'md',
  ...props
}) => {
  const sizeStyles: Record<string, { width: string; height: string }> = {
    '2xl': { width: '28.75em', height: '4.4em' },
    xl: { width: '21.95em', height: '3.9em' },
    lg: { width: '18.87em', height: '3.5em' },
    md: { width: '15.35em', height: '3.3em' },
    sm: { width: '12.05em', height: '3em' },
  }

  const selectedSize = sizeStyles[inputSize] || sizeStyles.md

  const inputStyles = {
    '--input-width': selectedSize.width,
    '--input-height': selectedSize.height,
    '--input-color': inputColor || '#e8e8e8',
    '--text-color': textColor || 'black',
    '--bg-color': background || 'black',
  } as React.CSSProperties

  const classNames = ['input']

  switch (inputSize) {
    case '2xl':
      classNames.push('input-2xl')
      break
    case 'xl':
      classNames.push('input-xl')
      break
    case 'lg':
      classNames.push('input-lg')
      break
    case 'sm':
      classNames.push('input-sm')
      break
    default:
      classNames.push('input-md')
  }

  return (
    <div className='shadow' style={inputStyles}>
      <input
        type={type}
        placeholder={placeholder}
        className={classNames.join(' ')}
        style={inputStyles}
      />
    </div>
  )
}

export default Input2D
