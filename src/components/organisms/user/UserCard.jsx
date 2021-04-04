import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserNameWithIcon } from "../../molucules/user/UserNameWithIcon";

export const UserCard = ({ user, isAdmin }) => {
  return (
    <Card>
      <UserNameWithIcon image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.mail}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    /* 親要素からはみ出したら折り返す */
    overflow-wrap: break-word;
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
