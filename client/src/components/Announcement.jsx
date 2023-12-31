import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color: #ff004f;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <div>
      <Container>
        Super Deal! Free Shipping On Orders over $50
      </Container>
    </div>
  )
}

export default Announcement