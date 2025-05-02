import {FC} from "react";

import {Button} from "@/components/ui/button/Button";
import {CardItem} from '@/components/ui/card-item/CardItem'

import {stackList} from "@/lib/stack-list";

import {StackSectionStyles} from "@/components/home/stack/StackSection.styles";


export const StackSection: FC = () => {
    return (
        <StackSectionStyles.Section>
            <StackSectionStyles.Container>
                <StackSectionStyles.Content>
                    <StackSectionStyles.Title>What was used in the project</StackSectionStyles.Title>
                    <StackSectionStyles.Grid>
                        {stackList.map(stack => (
                            <CardItem key={stack.id} title={stack.title} text={stack.text}/>
                        ))}
                    </StackSectionStyles.Grid>
                    <StackSectionStyles.BtnLink href='/contact'>
                        <Button title='Contact Us'/>
                    </StackSectionStyles.BtnLink>
                </StackSectionStyles.Content>
            </StackSectionStyles.Container>
        </StackSectionStyles.Section>
    )
}