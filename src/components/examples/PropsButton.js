import React from 'react';
import styled from "styled-components";

export const PropsButton = styled.button`
  color: white;
  padding: ${({big}) => big ? '3rem' : '1rem'};
  font-size: 2rem;
  margin: 1rem;
`;

export const SuccessButton = styled(PropsButton)`
  background: green;
`

export const DangerButton = styled(PropsButton)`
  background: red;
`

// export const BigButton  = styled(PropsButton)`
//   margin: 0.5rem;
//   text-transform: capitalize;
//   font-size: 3rem;
// `

