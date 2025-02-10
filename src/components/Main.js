import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();

  return (
    <main>
      <p>{t('description')}</p>
      <button onClick={() => alert(t('button_text'))}>{t('button_text')}</button>
    </main>
  );
};

export default Main;

