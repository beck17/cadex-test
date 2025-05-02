import {styled} from "@/styles/stitches.config";

export const HeroSectionStyles = {
    Section: styled('section', {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '32px 0',
        gap: '32px',
        '@sm': {
            flexDirection: 'column',
        }
    }),

    Left: styled('div', {
        flex: 1,
    }),

    Right: styled('div', {
        flex: 1,
        maxWidth: '640px',
        width: '100%',
        aspectRatio: '16 / 9',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 0 0 1px $border'
    }),

    Title: styled('h1', {
        fontSize: '32px',
        color: '$muted',
        marginBottom: '32px',
        textAlign: 'center',
    }),

    Text: styled('p', {
        fontSize: '16px',
        color: '$muted',
        marginBottom: '32px',
        textAlign: 'center'
    })
}