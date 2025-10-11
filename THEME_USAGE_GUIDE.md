# Dark/Light Mode Implementation Guide

## Overview

I've implemented a complete dark/light mode system for your portfolio project. Here's what was added and how to use it.

## Files Created/Modified

### 1. Theme Context (`src/contexts/ThemeContext.jsx`)

- **Purpose**: Manages theme state across your entire application
- **Features**:
  - Automatic system preference detection
  - Local storage persistence
  - Theme switching functions
  - React Context for global access

### 2. Theme Hook (`src/hooks/useTheme.js`)

- **Purpose**: Custom hook to access theme context
- **Features**:
  - Provides easy access to theme state and functions
  - Includes error handling for proper usage

### 3. Theme Toggle Component (`src/components/ThemeToggle.jsx`)

- **Purpose**: Reusable UI components for theme switching
- **Components Available**:
  - `ThemeToggle`: Simple icon-based toggle button
  - `ThemeToggleWithText`: Toggle with text labels
  - `ThemeSelector`: Segmented control style selector

### 4. Tailwind Configuration (`tailwind.config.js`)

- **Purpose**: Enables class-based dark mode in Tailwind CSS
- **Key Setting**: `darkMode: 'class'` - uses CSS classes instead of media queries

### 5. CSS Variables (`src/index.css`)

- **Purpose**: Defines color schemes for both light and dark modes
- **Features**: CSS custom properties that automatically switch based on theme

### 6. App Integration (`src/App.jsx` & `src/main.jsx`)

- **Purpose**: Wraps your app with theme provider and adds toggle button

## How to Use the Theme System

### Basic Usage

```jsx
import { useTheme } from "./hooks/useTheme";

function MyComponent() {
  const { theme, toggleTheme, isDark, isLight } = useTheme();

  return (
    <div className="bg-background text-foreground">
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "light" : "dark"} mode
      </button>
    </div>
  );
}
```

### Using Theme Toggle Components

```jsx
import ThemeToggle, { ThemeToggleWithText, ThemeSelector } from './components/ThemeToggle';

// Simple icon toggle
<ThemeToggle />

// Toggle with text
<ThemeToggleWithText />

// Segmented control
<ThemeSelector />

// Custom styling
<ThemeToggle className="my-custom-class" size="large" />
```

### Available Theme Functions

- `toggleTheme()`: Switch between light and dark
- `setLightTheme()`: Force light mode
- `setDarkTheme()`: Force dark mode
- `theme`: Current theme ('light' or 'dark')
- `isDark`: Boolean for dark mode
- `isLight`: Boolean for light mode

## CSS Classes for Dark Mode

### Tailwind Dark Mode Classes

Use the `dark:` prefix for dark mode styles:

```jsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  This will be white background in light mode, dark background in dark mode
</div>
```

### CSS Custom Properties

Use the predefined color variables:

```css
.my-element {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  border: 1px solid hsl(var(--border));
}
```

## Available Color Variables

### Light Mode Colors

- `--background`: White background
- `--foreground`: Dark text
- `--card`: Card backgrounds
- `--primary`: Primary brand color
- `--secondary`: Secondary color
- `--muted`: Muted text color
- `--border`: Border color
- `--accent`: Accent color

### Dark Mode Colors

- Same variable names but with dark theme values
- Automatically applied when `.dark` class is present on `<html>`

## Customization

### Adding New Colors

1. Add the color to both `:root` and `.dark` sections in `src/index.css`
2. Add it to the Tailwind config if you want Tailwind utilities
3. Use it in your components with `hsl(var(--your-color))`

### Custom Theme Toggle

You can create your own toggle using the theme context:

```jsx
import { useTheme } from "./hooks/useTheme";

function CustomToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button onClick={toggleTheme} className="your-custom-styles">
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
```

## How It Works

1. **Theme Detection**: On first load, checks localStorage, then system preference
2. **State Management**: React Context provides theme state to all components
3. **CSS Classes**: Adds/removes `dark` class on `<html>` element
4. **Color Switching**: CSS custom properties automatically update based on theme
5. **Persistence**: Theme choice is saved to localStorage

## Testing

1. Start your development server: `npm run dev`
2. Look for the theme toggle button in the top-right corner
3. Click it to switch between light and dark modes
4. Refresh the page - your theme choice should persist
5. Try changing your system theme preference - it should respect it on first visit

## Future Enhancements

You can easily extend this system by:

- Adding more theme variants (e.g., high contrast, color themes)
- Creating theme-specific animations
- Adding theme transitions
- Implementing theme-aware images
- Adding theme-specific component variants

The system is designed to be flexible and easily extensible for your future needs!
