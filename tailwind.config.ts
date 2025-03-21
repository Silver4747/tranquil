
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				tranquil: {
					50: '#f0f7ff',
					100: '#e0effe',
					200: '#bae0fd',
					300: '#7cc8fb',
					400: '#38acf5',
					500: '#0e96e9',
					600: '#0078c7',
					700: '#0060a0',
					800: '#065284',
					900: '#0b446d',
					950: '#072b49',
				},
				serenity: {
					50: '#f7f7f8',
					100: '#eeeef1',
					200: '#d9d9e0',
					300: '#b9b9c6',
					400: '#9293a6',
					500: '#75768c',
					600: '#5d5e73',
					700: '#4a4b5d',
					800: '#40414f',
					900: '#383943',
					950: '#25252d',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'fade-up': {
					from: { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					to: { 
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'slide-in-right': {
					from: { 
						opacity: '0',
						transform: 'translateX(20px)'
					},
					to: { 
						opacity: '1',
						transform: 'translateX(0)'
					},
				},
				'pulse-subtle': {
					'0%, 100%': { 
						opacity: '1' 
					},
					'50%': { 
						opacity: '0.8' 
					},
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-8px)' 
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
				'button': '0 2px 10px rgba(14, 150, 233, 0.15)',
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				'display': ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
