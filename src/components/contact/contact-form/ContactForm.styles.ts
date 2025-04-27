import {styled} from "@/styles/stitches";

export const ContactFormStyles = {
    Wrapper: styled('div', {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '64px 24px',
        color: '$text',

        '.ant-form-item-label > label': {
            color: '$text',
            fontWeight: 500,
        },

        '.ant-input, .ant-input-textarea': {
            backgroundColor: '$surface',
            color: '$text',
            border: '1px solid $border',
            borderRadius: '6px',
            '&::placeholder': {
                color: '$muted',
            },
            '&:focus, &:hover': {
                borderColor: '$accent',
                boxShadow: '0 0 0 2px rgba(99,102,241,0.2)',
            },
        },

        '.ant-input:focus, .ant-input:focus-within': {
            outline: 'none',
        },

        '.ant-btn-primary': {
            backgroundColor: '$accent',
            borderColor: '$accent',
            fontWeight: 600,
            width: '100%',
            marginTop: '8px',
            '&:hover': {
                opacity: 0.9,
            },
        },
    }),

    Title: styled('h2', {
        fontSize: '28px',
        marginBottom: '16px',
        color: '$muted',
    })
}