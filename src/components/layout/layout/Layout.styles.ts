import {styled} from "@/styles/stitches";

export const LayoutStyles = {
    Wrapper: styled('div', {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
    }),
    Content: styled('main', {
        flex: 1,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px 16px',
    })
}