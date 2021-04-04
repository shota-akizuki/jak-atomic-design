import styled from "styled-components";

export const Card = ({ children }) => {
  return <SCard>{children}</SCard>;
};

//幅はコンポーネントを呼ぶときに決定する
const SCard = styled.div`
  background-color: #fff;
  /* 色の指定 x軸の距離 y軸の距離 ぼかしの距離 どれだけ広げるのか */
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
