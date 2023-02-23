export const Statistics = ({
  good,
  bad,
  neutral,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => {
  const total = onCountTotalFeedback();
  const percentage = onCountPositiveFeedbackPercentage() || '';
  return (
    <>
      <h3>Statistics</h3>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {percentage} %</li>
      </ul>
    </>
  );
};
