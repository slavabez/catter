import styled from 'styled-components';

export default styled.div`
  width: ${props => (props.isOpen) ? 50 : 2}%;
  min-width: 20px;
  background-color: lightblue;
  transition: 0.5s width;
  border-right: 1px solid #352b2b;
`;