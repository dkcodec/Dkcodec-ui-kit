import React, { FC } from 'react'
import './Button2D.css'

export interface MyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm'
  btnColor?: string
  background?: string
  additionalClass?: string
  borderColor?: string
  theme?: 'light' | 'dark'
}

const Button2D: FC<MyButtonProps> = ({
  children,
  textColor,
  btnColor,
  background,
  borderColor = 'black',
  size = 'md',
  theme,
  additionalClass = '',
  ...props
}) => {
  const rootClasses = ['button_top']
  let br = '1rem'

  switch (size) {
    case '2xl':
      rootClasses.push('big-btn-2xl')
      br = '2rem'
      break
    case 'xl':
      rootClasses.push('big-btn-xl')
      br = '1.5rem'
      break
    case 'lg':
      rootClasses.push('big-btn-lg')
      br = '1.2rem'
      break
    case 'sm':
      rootClasses.push('big-btn-sm')
      br = '0.75rem'
      break
    default:
      rootClasses.push('big-btn-md')
  }

  if (additionalClass) {
    rootClasses.push(additionalClass)
  }

  const stylesSpan = {
    color: textColor,
    backgroundColor: btnColor,
    borderColor,
  }

  return (
    <button {...props} style={{ background, borderRadius: br }}>
      <span className={rootClasses.join(' ')} style={stylesSpan}>
        {children}
      </span>
    </button>
  )
}

export default Button2D
