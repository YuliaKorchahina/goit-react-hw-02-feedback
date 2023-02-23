import { FeedbackOptions } from './FeedbackOptions';
// import { Section } from './Section';

export const Feedback = ({ onLeaveFeedback }) => {
  return (
    <div>
      {/* <Section title="" /> */}
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
    </div>
  );
};
