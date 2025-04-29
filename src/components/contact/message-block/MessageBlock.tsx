import {FC} from "react";

import {MessageBlockStyles} from "@/components/contact/message-block/MessageBlock.styles";
import {Button} from "@/components/ui/button/Button";
import Link from "next/link";

interface Props {
    message: string
}

export const MessageBlock: FC<Props> = ({message}) => {
    return (
        <MessageBlockStyles.Box>
            <MessageBlockStyles.Title>
                {message}
            </MessageBlockStyles.Title>
            <MessageBlockStyles.Text>
                We appreciate your interest. We will get back to you shortly.
            </MessageBlockStyles.Text>
            <Link href='/'>
                <Button title='Go to home' />
            </Link>
        </MessageBlockStyles.Box>
    )
}