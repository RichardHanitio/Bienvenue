import styled from "styled-components"
import { centerChildElementsHorizontally, centerChildElementsVertically } from "../../mixin";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryColor};
  ${centerChildElementsVertically}


  .home-inner-container {
    width: 1400px;
    height: 90%;
    color: white;

    .home-part-1 {
      display: flex;
      justify-content: center;
      height: 750px;
      &-left {
        flex-basis: 60%;
        &-inner {
          margin-top: 30px;
          height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .home-part-1-title {
            font-size: 60px;
          }
          .home-part-1-desc {
            font-size: 24px;
          }
          .home-part-1-order {
            font-size: 24px;
          }
        }
      }
      &-right {
        flex-basis: 40%;
        position: relative;
        img {
          width: 650px;
          position: absolute;
          top: -60px;
          right: 0;
          z-index: 1;
        }
      }
    }

    .home-part-2 {
      display: flex;
      justify-content: center;
      height: 700px;
      &-left {
        flex-basis: 50%;
        img {
          width: 550px;
        }
      }
      &-right {
        flex-basis: 50%;
        .home-part-2-title {
          font-size: 52px;
        }
        .home-part-2-services {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          height: 300px;
          gap: 10px;
          margin: 25px 0;
          .service {
            display: flex;
            align-items: center;
            font-weight: 500;
            img {
              width: 60px;
              margin-right: 20px;
            }
            div {
              font-size: 20px;
            }
          }
        }
        .home-part-2-aboutus {
          font-size: 20px;
        }
      }
    }

    .home-part-3 {
      ${centerChildElementsVertically}
      min-height: 200px;
      margin-bottom : 50px;

      &-title {
        font-size: 40px;
      }
      &-offers {
        margin: 50px 0;
        width: 100%;
        ${centerChildElementsVertically}

        .offer {
          width: 70%;
          height: 320px;
          background-color: #ebeaef;
          border-radius: 10px;
          display: flex;
          align-items: center;
          flex-direction : column;
          justify-content: center;
          margin: 20px 0;
          .offer-inner {
            width: 95%;
            height: 90%;
            display: flex;
            .offer-left {
              img {
                /* height : 100%; */
                object-fit: cover;
                width: 400px;
                height: 100%;
              }
            }
            .offer-right {
              flex-basis: 70%;
              color: black;
              margin-left: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              .home-part-3-offer-title {
                font-size: 32px;
                text-align: center;
              }
              .home-part-3-offer-desc {
                text-align: center;
                font-size: 16px;
              }
              .home-part-3-offer-pricing {
                width: 100%;
                height: 20%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .real-price {
                  font-size: 16px;
                  color: #939393;
                  text-decoration: line-through;
                }

                .discounted-price {
                  font-size: 22px;
                  color: red;
                }
              }
            }
          }
        }
        .no-offers {
          font-size: 24px;
        }
      }
    }
  }
  .home-part-4 {
    width: 100%;
    height: 400px;
    background-color: #c4d0d0;
    display: flex;
    align-items: center;
    justify-content: center;

    &-inner-container {
      width: 70%;
      height: 80%;
      display: flex;
      .home-part-4-left {
        flex-basis: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        &-title {
          color: white;
          font-size: 44px;
        }
      }

      .home-part-4-right {
        flex-basis: 30%;
        display: flex;
        justify-content: flex-end;
        img {
          height: 100%;
        }
      }
    }
  }

  .home-part-5 {
    height: 800px;
    display: flex;
    align-items : center;
    justify-content : center;
    &-inner-container {
      display : flex;
      flex-direction: column;
      align-items: center;
      .home-part-5-title {
        font-size: 44px;
      }
      .home-part-5-reviews {
        display : grid;
        grid-template-columns : repeat(2, 1fr);
        justify-content : space-evenly;
        grid-gap : 20px 50px;
        margin : 50px 0;
        
        .review {
          width: 450px;
          height : 200px;
          background-color: #EBEAEF;
          color : black;
          border-radius : 10px;
          display : flex;
          align-items : center;
          justify-content : center;

          .review-inner-container {
            width : 95%;
            height : 92%;
            display : flex;
            flex-direction : column;

            .comment {
              font-style : italic;
              flex-basis : 70%;
              display : flex;
              align-items : center;
            }
            .profile {
              img {
                width : 70px;
                margin-right : 20px;
              }
              display : flex;
              flex-basis : 30%;
              align-items : center;
            }
          }
        }
      }
    }
  }
`;

export default Container;