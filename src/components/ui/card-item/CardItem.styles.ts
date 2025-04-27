import {styled} from "@/styles/stitches";

export const CardItemStyles = {
    Card: styled('div', {
        width: '280px',
        height: '200px',
        backgroundColor: '$surface',
        border: '1px solid $border',
        borderRadius: '8px',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        transition: 'all 0.2s',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 20px rgba(100, 100, 100, 0.3)',
        },
        h3: {
            fontSize: '18px',
            color: '$text',
            marginBottom: '8px',
        },
        p: {
            color: '$muted',
            fontSize: '14px',
        }
    })
}