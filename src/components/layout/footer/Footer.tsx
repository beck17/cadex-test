'use client'

import {FC} from "react";
import Link from "next/link";

import {FooterStyles} from "@/components/layout/footer/Footer.styles";


export const Footer: FC = () => {
    const currentYear = new Date().getFullYear()
    return (
        <FooterStyles.Footer>
            <FooterStyles.Container>
                <FooterStyles.Column>
                    <FooterStyles.Title>Cadex Company</FooterStyles.Title>
                </FooterStyles.Column>
                <FooterStyles.Column>
                    <Link href='/'>Home</Link>
                    <Link href='/contact'>Contact Us</Link>
                </FooterStyles.Column>
                <FooterStyles.Column>
                    <span>All rights reserved</span>
                    <span>
                        © {currentYear} Cadex
                    </span>
                </FooterStyles.Column>
            </FooterStyles.Container>
        </FooterStyles.Footer>
    )
}