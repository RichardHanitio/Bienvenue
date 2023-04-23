import styled from "styled-components"
import { centerChildElementsHorizontally, centerChildElementsVertically } from "../../mixin";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryColor};
  ${centerChildElementsVertically}

  .new-menu-inner-container {
    width: 1400px;
    height: 95%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;

    .new-menu-title {
      font-size : 40px;
      text-transform : uppercase;
      color : ${({theme}) => theme.adminColor};
      text-align : center;
      margin : 20px 0;
    }
    .new-menu-form-container {
      width : 50%;
      height : 1000px;
      background-color : ${({theme}) => theme.adminColor};
      border-radius : 20px;
      ${centerChildElementsHorizontally}
    }
    .new-menu-form {
      width : 90%;
      height : 92%;
      display : flex;
      flex-direction : column;
      justify-content : space-between;

      .update-menu-img {
        width : 100%;
        ${centerChildElementsHorizontally}
        img {
          width : 70%;
          border-radius : 10px;
        }
      }
      .new-menu-item {
        ${centerChildElementsHorizontally}
        justify-content : space-between;
        .new-menu-label {
          font-size : 20px;
        }
        .new-menu-input {
          height : 50px;
          width : 300px;
          padding : 10px 15px;
          border : none;
          border-radius : 5px;
          background-color : #e8e8e8;
  
          &:focus {
            outline : 2px solid ${({theme}) => theme.primaryColor}
          }
        }

        #menu-category {
          width : 180px;
          height : 40px;
        }
      }
      .new-menu-item-desc {
        ${centerChildElementsVertically}
        .new-menu-label {
          margin-bottom : 12px;
          align-self : flex-start;
        }
        .new-menu-input {
          width : 100%;
          height : 120px;
        }
      }
      .new-menu-action-buttons {
        display : grid;
        grid-template-columns : repeat(2, 1fr);
        height : 120px;

        .btn {
          width : 90%;
          justify-self : center;
          font-size : 24px;
          font-weight : bold;
        }

        .btn-delete {
          grid-column : span 2;
          width : 50%;
        }
      }
    }
  }
`

export default Container;