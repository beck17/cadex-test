import {styled} from "@/styles/stitches";

export const ButtonStyles = {
    Btn: styled('p', {
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '$accent',
        color: '$text',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'all 0.2s ease',
        '&:hover': {
            opacity: .9,
            boxShadow: '0 10px 20px rgba(100, 100, 100, 0.3)',
        },
    })
}