import {styled} from "@/styles/stitches";

export const FooterStyles = {
    Footer: styled('footer', {
        position: 'sticky',
        bottom: 0,
        padding: "12px",
        backgroundColor: '$surface',
        borderTop: '1px solid $border',
        color: '$muted',
    }),

    Container: styled('div', {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
    }),

    Column:styled('div', {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minWidth: '50px',

    }),

    Title: styled('h4', {
        color: '$text',
        fontSize: '18px',
        marginBottom: '12px',
        '@sm': {
            fontSize: '14px',
        }
    })
}