import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;

  background: var(--blue-200);

  p {
    color: #fff;
    font: 500 1rem "Roboto", sans-serif;

    @media (min-width: 1024px) {
      font: 500 1.3rem "Roboto", sans-serif;
    }
  }

  a {
    text-decoration: underline;
  }
`;
