import styled from '@emotion/styled';

export const Card = styled.div`
  padding: 24px;
  width: 380px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(233 233 233);
  box-shadow: 2px 2px 2px grey;
  margin-bottom: 15px;
`;

export const Description = styled.div`
  background-color: #fcfcfc;
  padding-top: 35px;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px grey;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #3e3e3f;
  margin-bottom: 18px;
`;

export const Tag = styled.p`
  font-size: 17px;
  font-weight: normal;
  color: #9a9a9a;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 17px;
  font-weight: normal;
  color: #9a9a9a;
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  padding-bottom: 30px;
  padding-top: 30px;
  justify-content: center;
  background-color: #c3c3c3;
  border-radius: 0px 0px 5px 5px;
`;

export const StatsItem = styled.li`
  display: grid;
  margin-right: 20px;
`;

export const Label = styled.span`
  font-size: 17px;
  font-weight: normal;
  color: ##404040;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: ##404040;
`;

export const AvatarImg = styled.img`
  width: 100px;
  border-radius: 50%;
  border: 0.5px solid grey;
  margin-bottom: 30px;
  padding: 10px;
`;
