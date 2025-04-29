import {styled} from "@/styles/stitches";

export const MessageBlockStyles = {
    Box: styled('div', {
        padding: '96px 24px',
        textAlign: 'center',
        color: '$text',
        backgroundColor: '$background',
        borderRadius: '12px',
        boxShadow: '0 0 0 1px $border',
    }),

    Title: styled('h2', {
        fontSize: '28px',
        marginBottom: '16px',
        color: '$accent',
    }),

    Text: styled('p', {
        fontSize: '18px',
        color: '$muted',
        marginBottom: '32px',
    }),

}