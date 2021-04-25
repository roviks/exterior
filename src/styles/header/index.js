import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Header = styled.header`
  color: #fff;
  background-color: #252525;
  .swiper {
    &-slide {
      min-height: 100vh;
      position: relative;
      opacity: 0 !important;
      .bg-img {
        height: 100vh;
        background-position: center;
        background-image: url(${require("../../assets/imgs/1.jpg").default});
        position: relative;
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          content: "";
          background-color: rgba(0, 0, 0, 0.65);
        }
      }
      &-active {
        opacity: 1 !important;
      }
      .caption {
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
        @media (max-width: 767px) {
          width: 80%;
        }
      }
      h1 {
        font-size: 75px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 2px;
        margin-bottom: 20px;
        font-family: var(--playFont);
        @media (max-width: 992px) {
          font-size: 55px;
        }
        @media (max-width: 767px) {
          font-size: 35px;
        }
      }
      &-counter {
        position: absolute;
        bottom: 40px;
        right: 40px;
        font-size: 40px;
        font-weight: 400;
        z-index: 5;
        font-family: var(--tekoFont);

        @media (max-width: 767px) {
          font-size: 20px;
        }
      }
    }
    &-pagination {
      &-current {
        font-size: 60px;
        font-weight: 700;
        position: relative;
        font-family: var(--tekoFont);
        color: transparent;
        -webkit-text-stroke: 0.5px #fff;
        @media (max-width: 992px) {
          font-size: 40px;
        }
        &::after {
          content: "/";
          color: #fff;
          position: relative;
          margin: 0 10px;
          font-size: 12px;
          font-weight: 100;
        }
      }
    }
  }
`;

export const Nav = styled.nav`
  color: #fff;
  padding: 5px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  min-height: 80px;
  @media (max-width: 992px) {
    min-height: 50px;
    background-color: rgba(37, 37, 49, 0.98);
  }
  & > .container {
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      justify-content: space-between;
    }
  }
`;

export const Logo = styled.div`
  height: 50px;
  width: max-content;
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  @media (max-width: 992px) {
    height: 30px;
    font-size: 23px;
  }
  svg {
    height: 100%;
    fill: #fff;
    margin-right: 10px;
  }
`;

export const List = styled.li``;

export const Link = styled(LinkRouter)`
  color: #fff;
  text-decoration: none;
  font-family: var(--fontFamilyBold);
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 13px;
  margin: 10px;
  padding: 15px 7px;
  @media (max-width: 992px) {
    display: block;
    padding-left: 30px;
  }
`;

export const Lists = styled.ul`
  visibility: hidden;
  opacity: 0;
  display: none;
  @media (max-width: 991px) {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 100px;
    background-color: rgba(37, 37, 49, 0.98);
    flex-direction: column;
  }
  &.show {
    visibility: visible;
    opacity: 1;
    display: flex;
  }
  @media (min-width: 992px) {
    visibility: visible;
    opacity: 1;
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: auto;
  }
`;

export const Icons = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 20px;

  a {
    margin: 0 10px;
    color: #fff;
    font-size: 13px;
    @media (max-width: 992px) {
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 50%;
    }
  }
`;

export const Search = styled.div`
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  padding-left: 30px;
  i {
    &:hover {
      cursor: pointer;
    }
  }
  .search-form {
    .close {
      display: none;
    }
    @media (min-width: 993px) {
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: rgba(37, 37, 49, 0.98);
      display: none;

      .close {
        position: absolute;
        top: 20%;
        display: block;
        right: 20%;
        color: #fff;
        font-size: 60px;
        opacity: 1;
        cursor: pointer;
      }
      form {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &.show {
        display: block;
        animation: fade 0.4s ease 1;
      }
      &.closing {
        animation: fadeOut 0.4s ease 1 forwards;
      }
    }
    input {
      padding: 15px 0;
      font-size: 80px;
      color: #fff;
      font-family: inherit;
      text-transform: uppercase;
      text-align: left;
      background: transparent;
      border: 0;
      border-bottom: 2px solid #b19777;
    }
    @media (max-width: 992px) {
      text-align: left;
      display: inline-block;
      margin-right: 15px;
      margin-top: 20px;
      input {
        font-size: 21px;
      }
    }
  }
`;

export const ButtonToggler = styled.button`
  display: block;
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #fff;
  @media (min-width: 992px) {
    display: none;
  }
`;
