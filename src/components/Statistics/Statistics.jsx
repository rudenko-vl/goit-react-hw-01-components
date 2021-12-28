import PropTypes from 'prop-types';
import {
  StatWrapper,
  StatTitle,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatWrapper>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ label, id, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatWrapper>
  );
}

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      id: PropTypes.number,
      percentage: PropTypes.number,
    })
  ),
};
