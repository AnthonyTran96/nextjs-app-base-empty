/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      // Design follow Desktop first
      desktop: { max: '1366px' },
      tablet: { max: '1024px' }, 
      mobile: { max: '640px' },
    },
    fontSize: {
      10: '0.625rem', 
      11: '0.6875rem',
      12: '0.75rem',
      13: '0.8125rem',
      14: '0.875rem',
      15: '0.9375rem',
      16: '1rem',
      17: '1.0625rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      44: '2.75rem',
      48: '3rem',
    },
    lineHeight: {
      12: '0.75rem', 
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      44: '2.75rem',
      48: '3rem',
      52: '3.25rem',
      56: '3.5rem',
      60: '3.75rem',
      64: '4rem',
    },
    spacing: {
      0: '0rem',
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      44: '2.75rem',
      48: '3rem',
    },
    opacity: {
      s: '0', 
      m: '0.3',
      l: '0.5',
      xl: '0.7',
    },
    borderWidth: {
      DEFAULT: '1px',
      'weight-none': '0px', 
      'weight-s': '0.5px',
      'weight-m': '1px',
      'weight-l': '1.5px',
    },
    borderRadius: {
      DEFAULT: '0.25rem',
      'radius-none': '0rem',
      'radius-s ': '0.25rem', 
      'radius-m': '0.5rem',
      'radius-l': '0.75rem',
      'radius-xl': '1rem',
      'radius-xxl': '1.5rem',
    },
    boxShadow: {
      none: 'none',
      'down-xs': '0 2px 2px 0',
      'down-s': '0 2px 4px 0',
      'down-m': '0 4px 8px 0',
      'down-l': '0 4px 16px 0 , 0 8px 16px 0',
      'up-s': '0 -2px 4px 0',
      'up-m': '0 -4px 8px 0',
      'up-l': '0 -4px 16px 0 , 0 -8px 16px 0',
      'inner-bottom': 'inset 0 -1px 0 0',
      'inner-right': 'inset -1px 0 0 0',
      'inner-top': 'inset 0 1px 0 0',
      'inner-left': 'inset 1px 0 0 0',
      'inner-bottom-bottom+left': 'inset 1px -1px 0 0',
      'inner-bottom-bottom+right': 'inset -1px -1px 0 0',
    },
    colors: {
      'th-background': 'var(--background)',
      text: {
        primary: 'rgb(var(--text-primary) / <alpha-value>)',
      },
      primary: {
        50: 'rgb(var(--primary-50) / <alpha-value>)',
        100: 'rgb(var(--primary-100) / <alpha-value>)',
        200: 'rgb(var(--primary-200) / <alpha-value>)',
        300: 'rgb(var(--primary-300) / <alpha-value>)',
        500: 'rgb(var(--primary-500) / <alpha-value>)',
        600: 'rgb(var(--primary-600) / <alpha-value>)',
        700: 'rgb(var(--primary-700) / <alpha-value>)',
        800: 'rgb(var(--primary-800) / <alpha-value>)',
      },
      secondary: {
        DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
        50: 'rgb(var(--secondary-50) / <alpha-value>)',
        100: 'rgb(var(--secondary-100) / <alpha-value>)',
        200: 'rgb(var(--secondary-200) / <alpha-value>)',
        300: 'rgb(var(--secondary-300) / <alpha-value>)',
        500: 'rgb(var(--secondary-500) / <alpha-value>)',
        600: 'rgb(var(--secondary-600) / <alpha-value>)',
        700: 'rgb(var(--secondary-700) / <alpha-value>)',
        800: 'rgb(var(--secondary-800) / <alpha-value>)',
      },
      gradient: {
        priority: {
          start: 'rgb(var(--gradient-priority-start) / <alpha-value>)',
          end: 'rgb(var(--gradient-priority-end) / <alpha-value>)',
        },
        primary: {
          start: 'rgb(var(--gradient-primary-start) / <alpha-value>)',
          end: 'rgb(var(--gradient-primary-end) / <alpha-value>)',
        },
        secondary: {
          start: 'rgb(var(--gradient-secondary-start) / <alpha-value>)',
          end: 'rgb(var(--gradient-secondary-end) / <alpha-value>)',
        },
        100: {
          start: 'rgb(var(--gradient-100-start) / <alpha-value>)',
          middle: 'rgb(var(--gradient-100-middle) / <alpha-value>)',
          end: 'rgb(var(--gradient-100-end) / <alpha-value>)',
        },
        200: {
          start: 'rgb(var(--gradient-200-start) / <alpha-value>)',
          middle: 'rgb(var(--gradient-200-middle) / <alpha-value>)',
          end: 'rgb(var(--gradient-200-end) / <alpha-value>)',
        },
      },
      link: {
        50: 'rgb(var(--link-50) / <alpha-value>)',
        100: 'rgb(var(--link-100) / <alpha-value>)',
        200: 'rgb(var(--link-200) / <alpha-value>)',
        300: 'rgb(var(--link-300) / <alpha-value>)',
        500: 'rgb(var(--link-500) / <alpha-value>)',
        600: 'rgb(var(--link-600) / <alpha-value>)',
        700: 'rgb(var(--link-700) / <alpha-value>)',
        800: 'rgb(var(--link-800) / <alpha-value>)',
      },
      success: {
        50: 'rgb(var(--success-50) / <alpha-value>)',
        100: 'rgb(var(--success-100) / <alpha-value>)',
        200: 'rgb(var(--success-200) / <alpha-value>)',
        300: 'rgb(var(--success-300) / <alpha-value>)',
        500: 'rgb(var(--success-500) / <alpha-value>)',
        600: 'rgb(var(--success-600) / <alpha-value>)',
        700: 'rgb(var(--success-700) / <alpha-value>)',
        800: 'rgb(var(--success-800) / <alpha-value>)',
      },
      pending: {
        50: 'rgb(var(--pending-50) / <alpha-value>)',
        100: 'rgb(var(--pending-100) / <alpha-value>)',
        200: 'rgb(var(--pending-200) / <alpha-value>)',
        300: 'rgb(var(--pending-300) / <alpha-value>)',
        500: 'rgb(var(--pending-500) / <alpha-value>)',
        600: 'rgb(var(--pending-600) / <alpha-value>)',
        700: 'rgb(var(--pending-700) / <alpha-value>)',
        800: 'rgb(var(--pending-800) / <alpha-value>)',
      },
      error: {
        50: 'rgb(var(--error-50) / <alpha-value>)',
        100: 'rgb(var(--error-100) / <alpha-value>)',
        200: 'rgb(var(--error-200) / <alpha-value>)',
        300: 'rgb(var(--error-300) / <alpha-value>)',
        500: 'rgb(var(--error-500) / <alpha-value>)',
        600: 'rgb(var(--error-600) / <alpha-value>)',
        700: 'rgb(var(--error-700) / <alpha-value>)',
        800: 'rgb(var(--error-800) / <alpha-value>)',
      },
      color: {
        50: 'rgb(var(--color-50) / <alpha-value>)', // white
        100: 'rgb(var(--color-100) / <alpha-value>)', // table-header
        200: 'rgb(var(--color-200) / <alpha-value>)', // background
        300: 'rgb(var(--color-300) / <alpha-value>)', // divider
        400: 'rgb(var(--color-400) / <alpha-value>)', // disable
        500: 'rgb(var(--color-500) / <alpha-value>)', // border
        600: 'rgb(var(--color-600) / <alpha-value>)', // placeholder
        700: 'rgb(var(--color-700) / <alpha-value>)', // text-secondary
        800: 'rgb(var(--color-800) / <alpha-value>) ', // text-primary
        900: 'rgb(var(--color-900) / <alpha-value>)', // text-title
        2000: 'rgb(var(--color-2000) / <alpha-value>)', // Test Color, don't use this color
        black: 'rgb(var(--color-black) / <alpha-value)',
      },
      blur_modal: 'rgb(var(--blur_modal) / <alpha-value>)',
      common: {
        0: 'rgb(var(--common-0) / <alpha-value>)', // text-label , text_btn_primary
        500: 'rgb(var(--common-500) / <alpha-value>)',
        1000: 'rgb(var(--common-1000) / <alpha-value>)', // background icon button,
      },
      transaction: {
        start: 'rgb(var(--transaction-start) / <alpha-value>)',
        middle: 'rgb(var(--transaction-middle) / <alpha-value>)',
        end: 'rgb(var(--transaction-end) / <alpha-value>)',
      },
      background_image: 'rgb(var(--background_image) / <alpha-value>)',
      skeleton: {
        background: 'rgb(var(--skeleton-background) / <alpha-value>)',
        highlight: 'rgb(var(--skeleton-highlight) / <alpha-value>)',
      },
    },
    extend: {
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
      },
    },
  },
  plugins: [],
}