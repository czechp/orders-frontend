import styled from "styled-components";
import PageCmp from "../../component/PageCmp";
import colors from "../../style/colors";

const ForbiddenPage = () => {
    return <PageCmp title="Masz zbyt niskie uprawnienia">
        <MessageBox>Masz zbyt niskie uprawnienia do tego zasobu</MessageBox>
    </PageCmp>
}

const MessageBox = styled.div`
  margin-top: 10rem;
  border: .2rem solid;
  border-radius: 1rem;
  padding: 3rem;
  color: ${() => colors.danger};
  font-size: xx-large;
  
`;
export default ForbiddenPage;