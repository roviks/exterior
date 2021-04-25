import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 100px 0 0;
  background: #252531;
  .logo {
    display: flex;
    align-items: center;
    font-size: 30px;
    svg {
      width: auto;
      height: 50px;
      fill: #fff;
      margin-right: 10px;
    }
  }
  .usful-links {
    li {
      font-size: 13px;
      margin-bottom: 10px;
      i {
        font-size: 10px;
        color: #b19777;
        margin-right: 5px;
      }
      &:hover {
        color: #b19777;
      }
    }
  }
  .fotcont {
    p {
      font-size: 13px;
      color: #888;
      font-weight: 400;
      line-height: 2;
      margin: 0;
    }
  }
  .fothead {
    h6 {
      color: #b19777;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 30px;
      @media (max-width: 992px) {
        margin-top: 15px;
        margin-bottom: 15px;
      }
    }
  }
  .abot {
    p {
      font-size: 13px;
    }
    .social-icon {
      margin-top: 20px;
      a {
        width: 45px;
        height: 45px;
        display: inline-block;
        line-height: 45px;
        text-align: center;
        font-size: 13px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        margin-right: 7px;
        transition: all 0.4s;
        &:hover {
          border-color: #b19777;
          color: #b19777;
        }
      }
    }
  }
  .sub-footer {
    padding: 30px 0;
    margin-top: 50px;
    border-top: 1px solid rgba(255, 255, 255, 0.02);
    p {
      font-size: 13px;
      color: #888;
      font-size: 15px;
      font-weight: 400;
      line-height: 2;
      margin: 0;
    }
  }
`;
