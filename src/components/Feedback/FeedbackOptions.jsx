import PropTypes from 'prop-types';

export const FeedbackOptions = ({onLeaveFeedback}) => {
  return (
    <div>
    <button type="button" onClick={() => onLeaveFeedback('good')}>
      Good 😍
    </button>
    <button type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral 😐
    </button>
    <button type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad 😤
    </button>
  </div>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
}