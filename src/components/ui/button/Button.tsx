import {FC} from "react";

import {ButtonStyles} from "@/components/ui/button/Button.styles";

interface Props {
    title: string
}

export const Button: FC<Props> = ({title}) => {
    return (
        <ButtonStyles.Btn>{title}</ButtonStyles.Btn>
    )
}