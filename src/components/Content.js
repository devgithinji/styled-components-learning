import React from 'react';
import styled from "styled-components";

const Content = ({className}) => {
    return (
        <section className={className}>
            <h3>section title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam eaque vel! Amet dicta distinctio
                eos esse eum ipsum iste laboriosam nobis, obcaecati qui quisquam quo ratione sequi velit veritatis.</p>
        </section>
    );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${props => `background:${props.theme.secondaryColor}`};
  ${props => `color:${props.theme.primaryColor}`};
`;