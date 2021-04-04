import { memo } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserNameWithIcon = memo(({ image, name }) => {
  console.log("UserNameWithIcon");
  //値のみを見るときはuseRecoilValueを使う
  const userInfo = useRecoilValue(userState);
  // const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImage width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

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

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
