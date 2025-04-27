import {FC} from "react";
import {CardItemStyles} from "@/components/ui/card-item/CardItem.styles";


interface Props {
    title: string;
    text: string;
}

export const CardItem: FC<Props> = ({title, text}) => {
    return (
        <CardItemStyles.Card>
            <h3>{title}</h3>
            <p>{text}</p>
        </CardItemStyles.Card>
    )
}