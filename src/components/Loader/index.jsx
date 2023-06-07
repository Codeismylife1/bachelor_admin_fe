import React from 'react';
import css from './style.module.css'; // You can create a separate CSS file for styling

const Loading = () => {
  return (
    <div className={css.loading_container}>
      <div className={css.loading_spinner}></div>
      <p className={css.loading_text}>Түр хүлээнэ үү...</p>
    </div>
  );
};

export default Loading;