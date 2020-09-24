import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export default function Home() {
  return <Title>Welcome To Next.Js</Title>;
}
