import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 60% 40%;
  grid-template-rows: 500px 300px;
  align-items: center;
  justify-content: center;
  gap: 20px;

  padding: 30px;

  background-color: #eee;
`;
