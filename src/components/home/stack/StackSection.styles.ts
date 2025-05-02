import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const StackSectionStyles = {
    Section: styled('section', {
        padding: '32px 12px',
        color: '$text',
    }),
    Container: styled('div', {
        maxWidth: '1200px',
        margin: '0 auto',
    }),
    Content: styled('div', {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    Title: styled('h2', {
        fontSize: '28px',
        marginBottom: '24px',
        color: '$text',
        textAlign: 'center',
    }),
    Grid: styled('div', {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexBasis: 'auto',
        gap: '32px',
        marginBottom: '32px',
    }),
    BtnLink: styled(Link, {
        textAlign: 'center'
    })
}