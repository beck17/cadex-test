import {FC} from "react";

import {HeroSectionStyles} from "@/components/home/hero/HeroSection.styles";
import {Video} from "@/components/ui/video/Video";


export const HeroSection: FC = () => {
    return (
        <HeroSectionStyles.Section>
            <HeroSectionStyles.Left>
                <HeroSectionStyles.Title>Welcome to the Cadex Test Project</HeroSectionStyles.Title>
                <HeroSectionStyles.Text>This is a demo site with Next.js, Stitches, AntDesign</HeroSectionStyles.Text>
            </HeroSectionStyles.Left>
            <HeroSectionStyles.Right>
                <Video/>
            </HeroSectionStyles.Right>
        </HeroSectionStyles.Section>
    )
}