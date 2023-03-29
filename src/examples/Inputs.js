import styled from "styled-components";

export const BasicInput = styled.input.attrs(props => ({
    type: 'text',
    placeholder: 'Enter value'
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`


export const AwesomeInput = styled.input.attrs(props => ({
    type: props.type || 'text',
    placeholder: props.placeholder || 'Enter value'
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`