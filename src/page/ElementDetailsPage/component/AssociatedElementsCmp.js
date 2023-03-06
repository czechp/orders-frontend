import styled from "styled-components";
import useGetRequest from "../../../service/useGetRequest";
import ElementListCmp from "../../ElementsPage/component/ElementListCmp";

const AssociatedElementsCmp = ({element}) => {
    return <ElementListCmp reload={()=>{}} url={`api/elements/associated-elements/${element.id}`} />
}

const Container = styled.div``;

export default AssociatedElementsCmp;