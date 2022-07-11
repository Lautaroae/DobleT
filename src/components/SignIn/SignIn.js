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
                            <FormH1>Inicia sesión con tu cuenta</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for" >contraseña</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit" >Entrar</FormButton>
                            <Text>¿Se te olvidó tu contraseña?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn