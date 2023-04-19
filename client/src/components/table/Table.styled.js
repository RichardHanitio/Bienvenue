import styled from "styled-components";
import { centerChildElementsHorizontally, centerChildElementsVertically } from "../../mixin";

const Container = styled.div`
  width : 100%;
  height : 100%;
  color : ${({theme}) => theme.adminColor};

  .table-title-row {
    display : grid;
    grid-template-columns : repeat(9, 250px);
    align-items : center;
    height : 100px;
    width : 2250px;
    border-bottom : 1px solid ${({theme}) => theme.adminColor};
    column-gap : 15px;

  }
  .table-row {
    display : grid;
    grid-template-columns : repeat(9, 250px);
    min-height : 60px;
    justify-items : stretch;
    margin : 30px 0;
    column-gap : 15px;
    text-align : justify;
    div {
      text-align : start;
      word-wrap : break-word;
    }
    .table-action-btn {
      ${centerChildElementsVertically}
      align-items : flex-start;
      .btn {
        color : white;
      }
      .btn-edit {
        margin-bottom : 10px;
      }
    } 
  }
`

export default Container;