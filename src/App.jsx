import "./App.css";
import styled from "styled-components";
import placholder from "./assets/placholder.jpg";

const Container = styled.div`
display flex;
flex-direction: column;
justify-content: center;
border: solid 1px red;
width: 500px;
border-radius: 10px;
`;
const Title = styled.h1`
  color: red;
  font-weight: 300;
`;

const Img = styled.img`
  width: 450px;
  height: 300px;
  border-radius: 10px
`;

const Text = styled.p`
  height: 200px;
  text-align: left;
  padding: 10px;
`;

const StyledComponents = () => (
  <Container>
    <Title>Card</Title>
 <Img src={placholder} />
    <Text>
      {" "}
      Nam at neque sed augue tristique laoreet. Vivamus augue risus,
      pellentesque id neque et, sagittis fermentum neque. Vivamus viverra
      venenatis scelerisque. Nullam pretium mattis cursus. In pulvinar feugiat
      elit non dapibus. Aliquam et laoreet elit, et mattis elit. Aenean placerat
      ante eu orci convallis fermentum. Maecenas nec consequat est, non feugiat
      orci. Curabitur vulputate rhoncus mi.{" "}
    </Text>
   
  </Container>
);

function App() {
  return (
    <>
      <StyledComponents />
    </>
  );
}

export default App;
