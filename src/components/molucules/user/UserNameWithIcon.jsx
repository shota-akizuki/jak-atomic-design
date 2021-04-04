import styled from "styled-components";

export const UserNameWithIcon = ({ image, name }) => {
  return (
    <SContainer>
      <SImage width={160} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  clip-path: circle();
  height: auto;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
