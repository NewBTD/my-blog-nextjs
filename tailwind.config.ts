import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundImage: {
			"gradient": "linear-gradient(91.07deg, rgba(91, 88, 88, 0.1) 0.16%, rgba(255, 250, 196, 0.1) 98.21%)",
		  },	
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			// blackGradient: "linear-gradient(91.07deg, rgba(91, 88, 88, 0.1) 0.16%)",
			// lightGradient: "rgba(255, 250, 196, 0.1) 98.21%)"
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
