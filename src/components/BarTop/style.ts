import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 97px;
  padding: 0.8rem 0;

  @media (min-width: 450px) {
    height: 120px;
  }
  @media (min-width: 768px) {
    height: 150px;
  }
  @media (min-width: 1024px) {
    height: 250px;
  }

  h1 {
    font-weight: 700;
    font-size: 2.5rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      font-size: 5rem;
    }

    span {
      background: -webkit-linear-gradient(#1f4c61, #438fa7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
    @media (min-width: 1024px) {
      font-size: 2rem;
    }

    color: var(--blue-200);
  }
`;
