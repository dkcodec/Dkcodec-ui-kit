# UI Kit - 2D Components

A modern and minimalist UI component library inspired by 2D design. Each component is designed with simplicity and elegance, making your application look sleek and user-friendly.

## 🚀 Features

- **Minimalist Design**: All components are designed in a simple 2D style, perfect for modern web apps.
- **Customizable**: Easily tweak styles and settings to fit your brand.
- **Lightweight**: Optimized for performance, ensuring your app stays fast and responsive.
- **Accessible**: All components are built with accessibility in mind.
- **Responsive**: Components are fully responsive and adapt to all screen sizes.

## 📦 Installation

Install the UI Kit through npm:

```bash
npm install dkcodec-ui-kit
```

## 🖼️ Components

### MyButton

The `MyButton` component is a flexible and customizable button with several style options, built using React. It supports different sizes, colors, themes, and additional styles. Here's how to use it.

#### ✨ Features

- Customizable size: `'2xl' | 'xl' | 'lg' | 'md' | 'sm'`
- Supports light and dark themes
- Set custom text, button, background, and border colors
- Additional custom CSS classes can be applied
- Responsive and accessible

#### 📋 Props

| Prop              | Type                                            | Default   | Description                                                   |
| ----------------- | ----------------------------------------------- | --------- | ------------------------------------------------------------- |
| `textColor`       | `string`                                        | `black`   | Custom color for the button text                              |
| `btnColor`        | `string`                                        | `#e8e8e8` | Custom color for the button background (within the span)      |
| `background`      | `string`                                        | `black`   | Custom color for the overall button background                |
| `borderColor`     | `string`                                        | `black`   | Border color of the button                                    |
| `size`            | `'2xl' \| 'xl' \| 'lg' \| 'md' \| 'sm'`         | `'md'`    | Size of the button (affects padding and border radius)        |
| `additionalClass` | `string`                                        | `''`      | Additional custom class to apply to the button's root element |
| `...props`        | `React.ButtonHTMLAttributes<HTMLButtonElement>` |           | Supports all native button attributes                         |

#### 📦 Example Usage

Here's how you can use the `MyButton` component in your project:

```jsx
import React from 'react'
import MyButton from 'dkcodec-ui-kit'

const App = () => {
  return (
    <div>
      {/* Basic button */}
      <MyButton>Click me</MyButton>

      {/* Custom button with size and colors */}
      <MyButton
        size='lg'
        textColor='darkblue'
        btnColor='lightblue'
        borderColor='blue'
        background='darkblue'
      >
        Custom Button
      </MyButton>

      {/* Button with additional custom class */}
      <MyButton size='sm' additionalClass='my-custom-class'>
        Small Button
      </MyButton>
    </div>
  )
}

export default App
```

#### 🎨 Customization

You can customize the button by passing in props such as `size`, `textColor`, `btnColor`, and `background`. You can also add your own styles by passing an `additionalClass` for further styling via CSS.

For example:

```css
/* MyButton.css */
.my-custom-class {
  border: 2px solid green;
  font-weight: bold;
}
```

#### 🛠️ Available Sizes

- `2xl`: Very large button
- `xl`: Extra large button
- `lg`: Large button
- `md`: Medium button (default)
- `sm`: Small button

Each size option adjusts the button's padding and border-radius to fit the design requirements.

#### 🚀 Performance Tips

- Avoid applying too many styles inline; prefer using classes when customizing heavily.
- Use the `size` prop to optimize spacing rather than adjusting margins manually.

## 🌐 Browser Support

UI Kit supports all modern browsers:

- Chrome
- Firefox
- Safari
- Edge

## 🛠️ Contributing

We welcome contributions! If you find any issues or want to add new features, feel free to open a pull request.

## 📄 License

This project is licensed under the ISC License.
