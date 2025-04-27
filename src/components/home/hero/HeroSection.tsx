'use client'

import {FC} from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

import {HeroSectionStyles} from "@/components/home/hero/HeroSection.styles";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


export const HeroSection: FC = () => {
    return (
        <HeroSectionStyles.Section>
            <HeroSectionStyles.Left>
                <HeroSectionStyles.Title>Welcome to the Cadex Test Project</HeroSectionStyles.Title>
                <HeroSectionStyles.Text>This is a demo site with Next.js, Stitches, AntDesign</HeroSectionStyles.Text>
            </HeroSectionStyles.Left>
            <HeroSectionStyles.Right>
                <LiteYouTubeEmbed
                    id='dQw4w9WgXcQ'
                    title='Never Gonna Give You Up'
                />
            </HeroSectionStyles.Right>
        </HeroSectionStyles.Section>
    )
}