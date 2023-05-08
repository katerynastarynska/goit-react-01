import PropTypes from 'prop-types';
import {
  Transactions,
  TransactionsTableHead,
  TransactionsTableBody,
  TransactionsTableRow,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Transactions>
      <TransactionsTableHead>
        <TransactionsTableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionsTableRow>
      </TransactionsTableHead>

      <TransactionsTableBody>
        {items.map(item => (
          <TransactionsTableRow key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TransactionsTableRow>
        ))}
      </TransactionsTableBody>
    </Transactions>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
