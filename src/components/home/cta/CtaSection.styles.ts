import {styled} from "@/styles/stitches";

export const CtaSectionStyles = {
    Section: styled('section', {
        padding: '32px 24px',
        color: '$text',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }),

    Container: styled('div', {
        maxWidth: '800px',
        textAlign: 'center',
    }),

    Title: styled('h3', {
        fontSize: '28px',
        color: '$text',
        marginBottom: '16px',
    }),

    Text: styled('p', {
        color: '$muted',
        fontSize: '16px',
        marginBottom: '32px',
    })
}