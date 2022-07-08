import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from "./SignInElements"

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"></Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign In your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for" >password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit" >Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn