import styled from '@emotion/styled';

export const StatWrapper = styled.section`
  background: aliceblue;
  margin: 40px auto 40px auto;
  padding: 30px 15px;
  border: 1px solid skyblue;
  border-radius: 15px;
`;
export const StatTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: brown;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  border-radius: 6px;
  background: linear-gradient(229.99deg, #83b3fc -26%, #dfe081 145%);
  :not(:last-child) {
    margin-right: 15px;
  }
`;
export const Label = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: blue;
`;
export const Percentage = styled.span`
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 700;
`;
