'use client'

import {FC} from "react";
import Link from "next/link";

import {Button} from "@/components/ui/button/Button";

import {CtaSectionStyles} from "@/components/home/cta/CtaSection.styles";


export const CtaSection: FC = () => {
    return (
        <CtaSectionStyles.Section>
            <CtaSectionStyles.Container>
                <CtaSectionStyles.Title>Ready to work together?</CtaSectionStyles.Title>
                <CtaSectionStyles.Text>Lets get started and build something awesome together.</CtaSectionStyles.Text>
                <Link href='/contact'>
                    <Button title='Contact Us'/>
                </Link>
            </CtaSectionStyles.Container>
        </CtaSectionStyles.Section>
    )
}