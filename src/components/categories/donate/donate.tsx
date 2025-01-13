import { FaCoffee } from 'react-icons/fa/index';

import { SpecialButton } from '@/components/special-button';

import styles from './donate.module.css';

export function Donate() {
  return (
    <div className={styles.donate}>
      <div className={styles.iconContainer}>
        <div className={styles.tail} />
        <div aria-hidden="true" className={styles.icon}>
          <FaCoffee />
        </div>
      </div>

      <div className={styles.title}>送一杯咖啡吧</div>
      <p className={styles.desc}>帮助我保持 Moodist 无广告。</p>
      <SpecialButton
        className={styles.button}
        href="https://buymeacoffee.com/moodist"
      >
        送一杯
      </SpecialButton>
    </div>
  );
}
