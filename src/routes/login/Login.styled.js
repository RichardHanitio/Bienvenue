import styled from "styled-components";

const Container = styled.div`
  background-color : ${({theme}) => theme.primaryColor};
  width : 100vw;
  height : 100vh;
  display : flex;

  .login-left {
    flex-basis : 40%;
    display : flex;
    align-items : center;
    justify-content : center;

    .login-left-container {
      width : 85%;
      height : 70%;
      display : flex;
      flex-direction : column;
      align-items : center;
      justify-content : space-around;

      .login-logo {
        width : 60%;
      }
      
      .login-quote {
        color : white;
        text-align: center;
        line-height : 30px;
      }
    }
  }
  
  .login-right {
    flex-basis : 60%;
    background-color : ${({theme}) => theme.headerColor};
    display : flex;
    align-items : center;
    justify-content : center;

    .login-right-container {
      width : 60%;
      height : 90%;
      color : white;
      display : flex;
      flex-direction : column;
      justify-content : center;

      .login-title {
        font-size : 32px;
        margin-bottom : 15px;
      }

      .login-desc {
        font-size : 18px;
        font-weight : 500;
        margin-bottom : 30px;
      }

      .login-form {
        .login-item {
          min-height : 80px;
          display : flex;
          flex-direction : column;
          justify-content : center;
          
          .login-label {
            margin-bottom : 10px;
          }

          .login-input {
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
        .login-submit {
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