import PropTypes from 'prop-types';
import { StatsCard, Wrapper, Title, StatsList, StatsItem, ItemLabel, ItemPercentage } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
  return (
    <StatsCard>
      <Wrapper>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(el => (
          <StatsItem key={el.id} style={{ backgroundColor: getRandomHexColor() }}>
            <ItemLabel>{el.label}</ItemLabel>
            <ItemPercentage>{el.percentage}%</ItemPercentage>
          </StatsItem>
        ))}
      </StatsList>
      </Wrapper>
    </StatsCard>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
