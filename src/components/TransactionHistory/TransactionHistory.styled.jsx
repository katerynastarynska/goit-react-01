import styled from '@emotion/styled';

export const Transactions = styled.table`
  width: 680px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #e3e2e2;
  // box-shadow: 1px 1px 1px grey;
`;

export const TransactionsTableHead = styled.thead`
  border: 1px solid grey;
  font-size: 20px;
  font-weight: 500;
  background-color: #7fcaf0;
  color: white;
  height: 50px;
`;

export const TransactionsTableBody = styled.tbody`
  border: 1px solid grey;
  font-size: 16px;
  font-weight: 400;
  background-color: #b9c8d0;
  color: white;
`;

export const TransactionsTableRow = styled.tr`
  height: 50px;
  :nth-child(even) {
    background: white;
  }
  :nth-child(even) {
    color: #b9c8d0;
  }
`;
