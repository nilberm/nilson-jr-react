import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  .socialMediaLinks {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 1200px) {
      width: 1180px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .buttonsSocialMedia {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      @media (min-width: 1200px) {
        flex-direction: column;

        button {
          width: 18rem;
        }
      }
    }
  }

  .bottomImage {
    width: 100%;
    margin-bottom: 2rem;

    @media (min-width: 1200px) {
      border-radius: 18px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
`;
