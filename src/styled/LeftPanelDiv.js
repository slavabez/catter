import styled from 'styled-components';

export default styled.div`
  width: ${props => (props.isOpen) ? 50 : 8}%;
  background-color: lightblue;
  transition: 0.5s width;
  border-right: 1px solid #352b2b;
`;