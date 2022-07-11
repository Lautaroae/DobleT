import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
min-height:692px ;
position:fixed ;
bottom:0 ;
left:0 ;
right:0 ;
top:0 ;
z-index:0 ;
overflow:hidden ;
background:linear-gradient(108deg, rgba(152,254,255,1)0%, rgba(60,160,260,1)50%, rgba(0,45,260,1)100%) ;

`
export const FormWrap = styled.div`
height:100% ;
display:flex ;
flex-direction:column ;
justify-content:center ;

@media screen and (max-width:400px){
    height:80% ;
}
`
export const FormContent = styled.div`
border:1px solid red;
text-align:center ;
`
export const Form = styled.div`

`
export const FormH1 = styled.h1`

`
export const FormLabel = styled.div`

`
export const FormInput = styled.div`

`
export const FormButton = styled.button`

`
export const Text = styled.p`

`
export const Icon = styled(Link)`

`