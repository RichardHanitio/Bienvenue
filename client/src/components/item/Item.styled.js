import styled from "styled-components";

const Container = styled.div`
  background-color : white;
  border-radius : 10px;
  width : 380px;
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
      margin-bottom : 25px;
      
      .item-name {
        font-size : 24px;
        text-align : center;
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

      .item-buy:disabled {
        color : white;
      }
    }
  }

`;

export default Container;