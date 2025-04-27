import {createStitches} from "@stitches/react";


export const {styled, css, globalCss, theme, createTheme} = createStitches({
    theme: {
        colors: {
            primary: '#101b39',
            background: '#060923',
            surface: '#1e293b',
            text: '#e2e8f0',
            muted: '#94a4b8',
            border: '#2e3f55',
            error: '#ef4444',
            success: '#22c66e',
            accent: '#4a4a8f',
        },
        space: {
            sm: '8px',
            md: '16px',
            lg: '32px',
        },
        radii: {
            sm: '4px',
            md: '8px',
            lg: '16px',
        },
        font: {
            body: 'Nunito, sans-serif',
        },
    },
    media: {
        sm: '(max-width: 600px)',
        md: '(max-width: 900px)',
        lg: '(max-width: 1200px)',
    }
})
