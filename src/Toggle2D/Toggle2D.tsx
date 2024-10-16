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
  const sizeStyles: Record<string, { width: string; height: string }> = {
    '2xl': { width: '6em', height: '3em' },
    xl: { width: '5em', height: '2.5em' },
    lg: { width: '4em', height: '2em' },
    md: { width: '3em', height: '1.5em' },
    sm: { width: '2em', height: '1em' },
  }

  const selectedSize = sizeStyles[toggleSize] || sizeStyles.md

  const switchStyles = {
    '--switch-width': selectedSize.width,
    '--switch-height': selectedSize.height,
    '--thumb-color': btnColor || '#e8e8e8',
    '--track-color': background || '#e8e8e8',
    '--outline-color': borderColor,
  } as React.CSSProperties

  return (
    <label className={`switch ${additionalClass}`} style={switchStyles}>
      <input type='checkbox' {...props} />
      <span className='slider'></span>
    </label>
  )
}

export default Toggle2D
