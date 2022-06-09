module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                spinSlow: "spinSlow 2s linear infinite",
                pulseDeep: "pulseDeep 3s ease-out infinite",
                bounceDown: "bounceDown 1s infinite",
                quickPing: "quickPing 0.25s cubic-bezier(0, 0, 0.2, 1) infinite",
                fadeIn: "fadeIn 0.5s ease-in",
                bubbleIn: "bubbleIn 1s linear",
            },
            keyframes: {
                spinSlow: {
                    "0%": { transform: "rotate(-360deg)" },
                },
                pulseDeep: {
                    "0%, 100%": {
                        transform: "scale(1)",
                        // filter: "drop-shadow(0 0 0 hsl(var(--wa)))",
                    },
                    "50%": {
                        transform: "scale(1.1)",
                        // filter: "drop-shadow(1px 1px 0 hsl(var(--b3)))",
                    },
                },
                bounceDown: {
                    "0%, 100%": {
                        transform: "translateY(0)",
                        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateY(25%)",
                        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
                quickPing: {
                    "75%, 100%": {
                        transform: "scale(2)",
                        opacity: "0",
                    },
                },
                fadeIn: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
                bubbleIn: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
        },
        scale: {
            102: "1.02",
        },
        screens: {
            xsm: "470px",
            sm: "640px",
            tablet: "800px",
            lg: "1024px",
        },
    },
    plugins: [require("daisyui")],
};
