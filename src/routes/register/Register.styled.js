import styled from "styled-components";

const Container = styled.div`
  background-color : ${({theme}) => theme.primaryColor};
  width : 100vw;
  height : 100vh;
  display : flex;

  .register-left {
    flex-basis : 40%;
    display : flex;
    align-items : center;
    justify-content : center;

    .register-left-container {
      width : 85%;
      height : 70%;
      display : flex;
      flex-direction : column;
      align-items : center;
      justify-content : space-around;

      .register-logo {
        width : 60%;
      }
      
      .register-quote {
        color : white;
        text-align: center;
        line-height : 30px;
      }
    }
  }
  
  .register-right {
    flex-basis : 60%;
    background-color : ${({theme}) => theme.headerColor};
    display : flex;
    align-items : center;
    justify-content : center;

    .register-right-container {
      width : 60%;
      height : 90%;
      color : white;
      display : flex;
      flex-direction : column;
      justify-content : center;

      .register-title {
        font-size : 32px;
        margin-bottom : 15px;
      }

      .register-desc {
        font-size : 18px;
        font-weight : 500;
        margin-bottom : 30px;
      }

      .register-form {
        .register-item {
          min-height : 80px;
          display : flex;
          flex-direction : column;
          justify-content : center;
          
          .register-label {
            margin-bottom : 10px;
            font-size : 16px;
          }

          .register-input {
            border : none;
            outline : none;
            border-radius : 5px;
            padding : 5px 10px;
          }
        }
        .show-pass {
          display : flex;
          margin : 10px 0 30px;

          .show-pass-label {
            font-size : 14px;
            cursor : pointer;
          }
          
          .show-pass-input {
            margin-right : 5px;
            cursor : pointer;
          }
        }
        .register-submit {
          width : 100%;
          padding : 8px 0;
          border-radius : 5px;
          border : none;
          outline : none;
          background-color : ${({theme}) => theme.activeColor};
          color : white;
          cursor : pointer;
        }
      }
    }
  }
`;

export default Container;