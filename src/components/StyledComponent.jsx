
import React from 'react';
import styled from 'styled-components';
import image from "../assets/pl";

const Container = styled.div `
display flex;
flex-direction: column;
justify-content: center;
border: solid 1px red;
width: 500px;
border-radius: 10px;
`
const Title = styled.h1 `
color: red;
font-weight: 300;
`

const Img = styled.image `
background-image: url(${image});
`

const Text = styled.div `
width: 100%;
height: 200px;
text-align: left;
` 

const StyledComponents= () => (
    <Container>
<Title>Card</Title>
<Img />
<Text> Nam at neque sed augue tristique laoreet. Vivamus augue risus, pellentesque id neque et, sagittis fermentum neque. Vivamus viverra venenatis scelerisque.
     Nullam pretium mattis cursus. In pulvinar feugiat elit non dapibus. Aliquam et laoreet elit, et mattis elit.
     Aenean placerat ante eu orci convallis fermentum. Maecenas nec consequat est, non feugiat orci. Curabitur vulputate rhoncus mi. </Text>
    </Container>
)

export default StyledComponents;
