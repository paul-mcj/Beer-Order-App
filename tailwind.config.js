module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                pulseDeep: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                pulseDeep: {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.02 },
                },
            },
        },
    },
    plugins: [require("daisyui")],
};
