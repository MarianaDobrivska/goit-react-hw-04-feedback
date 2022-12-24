import s from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={s.wrapper}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
