
import {FC} from "react";
import Link from "next/link";

import {HeaderStyles} from "@/components/layout/header/Header.styles";


export const Header: FC = () => {
    return (
        <HeaderStyles.Header>
            <HeaderStyles.Navigate>
                <HeaderStyles.Logo>
                    <Link href='/'>Cadex Test Project</Link>
                </HeaderStyles.Logo>
                <HeaderStyles.NavigationLinks>
                    <Link href='/'>Home</Link>
                    <Link href='/contact'>Contact Us</Link>
                </HeaderStyles.NavigationLinks>
            </HeaderStyles.Navigate>
        </HeaderStyles.Header>
    )
}