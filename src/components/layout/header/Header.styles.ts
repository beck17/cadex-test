import {styled} from "@/styles/stitches.config";

export const HeaderStyles = {
    Header: styled('header', {
        position: 'sticky',
        top: 0,
        backgroundColor: '$surface',
        borderBottom: '1px solid $border',
        padding: '16px 24px',
        zIndex: 10,
        color: '$text',
    }),

    Navigate: styled('nav', {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
    }),

    Logo: styled('span', {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '$text',
        a: {
            color: '$text',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            '$:hover': {
                color: '$accent',
            }
        }
    }),

    NavigationLinks: styled('div', {
        display: 'flex',
        gap: '24px',
        a: {
            color: '$text',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            '$:hover': {
                color: '$accent',
            }
        }
    })
}