import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;

  .heroContainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 1200px) {
      width: 1180px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4rem;
    }

    .heroImg {
      width: 100%;

      @media (min-width: 1200px) {
        border-radius: 18px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
    }

    .actionContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin: 2rem 0;

      height: 100%;

      @media (min-width: 768px) {
        gap: 2rem;
      }

      h2 {
        font: 400 1.2rem "Roboto", sans-serif;
        text-align: center;
        width: 19rem;
        line-height: 24px;

        @media (min-width: 768px) {
          font-size: 1.5rem;
        }
        @media (min-width: 1200px) {
          font-size: 2rem;
          line-height: 36px;
          width: 26rem;
          text-align: end;
        }
      }
    }
  }
`;
