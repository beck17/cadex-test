import {ReactNode} from "react";

import {Header} from "@/components/layout/header/Header";
import {Footer} from "@/components/layout/footer/Footer";

import {LayoutStyles} from "@/components/layout/layout/Layout.styles";
import {globalStyles} from "@/styles/global";


export const Layout = ({children}: { children: ReactNode }) => {
    globalStyles()
    return (
        <LayoutStyles.Wrapper>
            <Header/>
            <LayoutStyles.Content>{children}</LayoutStyles.Content>
            <Footer/>
        </LayoutStyles.Wrapper>
    )
}