import styled from "styled-components";
import { centerChildElementsVertically, centerChildElementsHorizontally } from "../../mixin";

const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 100vw;
  min-height: 100vh;
  ${centerChildElementsVertically}
  justify-content : flex-start;

  .reservation-inner-container {
    width: 1400px;
    height: 90%;

    .order-summary {
      margin-bottom : 70px;
      .order-summary-title {
        color: white;
        font-size: 28px;
        margin: 30px 0;
      }
      .no-item {
        color : white;
        font-size : 20px;
      }

      .orders-container {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        ${centerChildElementsVertically}
        .orders-item {
          color: white;
          display: flex;
          margin: 20px 0;
          width: 95%;
          .orders-item-image {
            img {
              width: 200px;
              height: 150px;
              object-fit: cover;
              border-radius: 20px;
            }
          }
          .orders-item-details {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin-left: 30px;
            .orders-item-name {
              font-weight: bold;
              font-size: 24px;
            }
            .orders-item-price {
              font-size: 18px;
            }
          }
          .orders-item-amount {
            align-self: center;
            display: flex;
            .orders-item-amount-button {
              cursor : pointer;
              width: 30px;
              height: 30px;
              background-color: white;
              color: black;
              margin : 0 10px;
              font-size : 25px;
              ${centerChildElementsHorizontally}
            }
          }
        }

        .horizontal-line {
          width : 98%;
          height : 3px;
          background-color : white;
          margin : 20px 0;
        }

        .total {
          display : flex;
          justify-content : space-between;
          width : 95%;
          height : 50px;
          margin-bottom : 30px;
          color : white;
          font-weight : bold;
          div {
            font-size : 24px;
          }
        }
      }
    }

    .reservation-details {
      height : 500px;
      display : flex;
      flex-direction : column;

      &-title {
        font-size : 28px;
        color : white;
      }

      .details {
        height : 300px;
        ${centerChildElementsVertically}
        justify-content : space-evenly;

        .detail {
          .detail-label {
            font-size : 20px;
            margin-bottom : 18px;
            color : white;
          }
          .react-time-picker__wrapper {
            background-color : white;
          }
          .detail-input {
            padding : 0 10px;
            height : 40px;
          }
        }
        margin : 30px 0;
      }
      .reserve-button {
        height : 50px;
        font-size : 24px;
        align-self : center;
      }

    }
  }
`;

export default Container;