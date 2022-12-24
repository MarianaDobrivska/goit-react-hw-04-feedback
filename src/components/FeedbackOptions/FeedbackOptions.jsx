import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.buttonWrapper}>
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            className={s.button}
            onClick={onLeaveFeedback}
            value={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
