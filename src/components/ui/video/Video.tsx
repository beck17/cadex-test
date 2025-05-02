'use client'

import React, {FC} from 'react';
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export const Video: FC = () => {
    return (
        <LiteYouTubeEmbed
            id='dQw4w9WgXcQ'
            title='Never Gonna Give You Up'
        />
    );
};