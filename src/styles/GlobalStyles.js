import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  .btn {
    &-curve {
      background: transparent;
      padding: 12px 35px;
      border: 1px solid #1e1e1e;
      font-family:  var(--tekoFont);
      position: relative;
      overflow: hidden;
      cursor: pointer;
      transition: all .4s;
      text-decoration: none;
      display: inline-block;
      span {
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
        z-index: 2;
        transition: all .4s;
        color: #fff;
      }
      &:hover {
        &::after {
          bottom: -30px;
          transform: rotate(0deg);
        }
      }
      &::after {
        content: '';
        position: absolute;
        top: -30px;
        left: -30px;
        right: -30px;
        bottom: 130%;
        background: #1e1e1e;
        transform: rotate(-5deg);
        transition: all .8s;
        background-color: #fff;
      }
    }
    &-color {
      background: #b19777;
      border-color: #b19777;
      &:hover {
        span {
          color: #b19777;
        }
      }
    }
  }

  .bg-gray {
    background-color: #f8f4f3;
  }

  .dark {
    background: #252531 !important;
    color: #fff;
    p {
      color: #fff!important;
    }
  }

  h3 {
    font-size: 35px;
  }
`;
