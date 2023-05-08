import styled from '@emotion/styled';

export const StatsCard = styled.section`
  padding: 24px;
  width: 380px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(233 233 233);
  box-shadow: 2px 2px 2px grey;
  margin-bottom: 15px;
  
`;

export const Wrapper = styled.div`
margin-right: 40px;
margin-left: 40px;
margin-top: 20px;
margin-bottom: 30px;
box-shadow: 2px 2px 2px grey;
`

export const Title = styled.h2`
padding-top: 25px;
padding-bottom: 25px;
background-color: #bfffea;
`

export const StatsList = styled.ul`
display: flex;
justify-content: space-between;
`

export const StatsItem = styled.li`
padding-top: 25px;
padding-bottom: 25px;
display: flex;
flex-direction: column;
width: 100%;
`

export const ItemLabel = styled.span`
font-size: 14px;
font-weight: normal;
color: white;
margin-bottom: 5px;
`

export const ItemPercentage = styled.span`
font-size: 20px;
font-weight: normal;
`