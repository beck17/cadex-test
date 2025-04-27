'use client'

import {FC, useState} from "react";
import {Button, Form, Input} from "antd";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {MessageBlock} from "@/components/contact/message-block/MessageBlock";

import {contactUsSchema, FormData} from "@/lib/form-schema";

import {ContactFormStyles} from "@/components/contact/contact-form/ContactForm.styles";


export const ContactForm: FC = () => {
    const [responseMessage, setResponseMessage] = useState<string>('')

    const {
        handleSubmit,
        control,
        reset,
        formState: {errors, isSubmitting, isSubmitSuccessful}
    } = useForm<FormData>({
        resolver: yupResolver(contactUsSchema)
    })

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch('api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            const result: { message: string } = await response.json()
            setResponseMessage(result.message)
            reset({
                name: '',
                email: '',
                message: ''
            })
        } catch (e) {
            console.error(e);
        }
    }

    const currentComponent = () => {
        if (isSubmitSuccessful) return <MessageBlock message={responseMessage}/>

        return (
            <>
                <ContactFormStyles.Title>
                    Enter your details and we will contact you
                </ContactFormStyles.Title>
                <Form onFinish={handleSubmit(onSubmit)} layout={"vertical"}>
                    <Form.Item label='Name' validateStatus={errors.name ? 'error' : ''} help={errors.name?.message}>
                        <Controller
                            control={control}
                            name='name'
                            render={({field}) => <Input {...field}/>}
                        />
                    </Form.Item>

                    <Form.Item label='Email' validateStatus={errors.email ? 'error' : ''} help={errors.email?.message}>
                        <Controller
                            control={control}
                            name='email'
                            render={({field}) => <Input {...field}/>}
                        />
                    </Form.Item>

                    <Form.Item label='Message'
                               validateStatus={errors.message ? 'error' : ''}
                               help={errors.message?.message}>
                        <Controller
                            control={control}
                            name='message'
                            render={
                                ({field}) => <Input.TextArea rows={4} {...field}/>
                            }
                        />
                    </Form.Item>
                    <Button type='primary' htmlType='submit' loading={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            </>

        )
    }
    return (
        <ContactFormStyles.Wrapper>
            {currentComponent()}
        </ContactFormStyles.Wrapper>
    )
}