import styled from "styled-components";

const Container = styled.div`
  background-color : white;
  border-radius : 10px;
  width : 350px;
  height : 430px;
  display : flex;
  align-items : center;
  justify-content : center;

  .item-inner-container {
    width : 92%;
    height : 92%;
    display : flex;
    flex-direction : column;

    .item-img {
      flex-basis : 40%;
      
      img {
        width : 100%;
      }
    }
  
    .item-name-rating-desc {
      flex-basis : 45%;
      display : flex;
      flex-direction : column;
      align-items : center;
      justify-content : space-around;
      
      .item-name {
        font-size : 24px;
      }

      .item-rating {
        margin : 0 5px;
      }

      .item-desc {
        text-align : center;
        font-size : 14px;
      }
    }
  
    .item-price-buy {
      flex-basis : 15%;
      display : flex;
      align-items : center;
      justify-content : space-between;

      .item-price {
        font-weight : 500;
      }

      .item-buy {
        background-color : ${({theme}) => theme.inactiveColor};
        border : none;
        font-weight : 600;
        padding : 3px 15px;
        border-radius : 15px;
      }
    }
  }

`;

export default Container;