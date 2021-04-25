import styled from "styled-components";

export const Section = styled.section`
  padding: 120px 0;
  position: relative;
  @media (max-width: 767px) {
    padding: 80px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0;
  }
`;

export const SectionTitle = styled.div`
  position: relative;
  margin: 0 auto 80px;

  h4 {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 2px;
    @media (max-width: 767px) {
      font-size: 25px;
    }
  }

  h6 {
    color: #b19777;
    font-weight: 300;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
`;
