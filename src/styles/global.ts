import {globalCss} from "@/styles/stitches.config";

export const globalStyles = globalCss({
    '*': {margin:0, padding: 0, boxSizing: 'border-box'},
    'html,body': {
        fontFamily: '$body',
        backgroundColor: '$background',
        color: '$text',
    },
    a: {
        textDecoration: 'none',
        color: 'inherit',
    },
})