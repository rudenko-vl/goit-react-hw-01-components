import styled from '@emotion/styled';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 400px;
  padding: 10px;
  background-color: aliceblue;
  border-radius: 20px;
  margin: 0 auto;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid goldenrod;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: blue;
  margin: 10px auto;
`;
export const UserTag = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 10px auto;
  color: brown;
`;
export const Location = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 10px auto;
  color: red;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;
export const StatsItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Label = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: blueviolet;
`;
export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
