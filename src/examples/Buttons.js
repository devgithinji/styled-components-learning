import styled from "styled-components";

const color = '#26FF00FF';
const padding = 'padding:1rem'
const margin = 'margin:1rem'

export const Button = styled.button`
  ${padding};
  ${margin};
  color: #26ff00;
  background: blue;
  text-transform: uppercase;
`;

export const SecondButton = styled.button`
  color: ${color};
  background: var(--primaryColor);
  text-transform: uppercase;
`;
