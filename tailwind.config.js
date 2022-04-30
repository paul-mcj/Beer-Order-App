module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                pulseDeep: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                spinSlow: "spin 1.5s linear infinite",
                warning: "warning 3s ease-out infinite",
            },
            keyframes: {
                pulseDeep: {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.0 },
                },
                spinSlow: {
                    "0%, 100%": { transform: "rotate(0deg)" },
                    "50%": { transform: "rotate(360deg)" },
                },
                warning: {
                    "0%, 100%": {
                        transform: "scale(1)",
                        filter: "drop-shadow(0 0 0 hsl(var(--wa)))",
                    },
                    "50%": {
                        transform: "scale(1.2)",
                        filter: "drop-shadow(3px 3px 0 hsl(var(--b3)))",
                    },
                },
            },
        },
    },
    plugins: [require("daisyui")],
};
