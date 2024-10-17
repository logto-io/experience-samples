import LogtoLogoLight from '../../assets/logto-logo-light.svg?react';
import LogtoLogoShadow from '../../assets/logto-logo-shadow.svg?react';

import styles from './index.module.scss';

const logtoUrl = `https://logto.io/?${new URLSearchParams({
  utm_source: 'sign_in',
  utm_medium: 'powered_by',
}).toString()}`;

type Props = {
  readonly className?: string;
};

const LogtoSignature = ({ className }: Props) => {
  return (
    <div className={className}>
      <a href={logtoUrl} target="_blank" rel="noopener noreferrer" className={styles.signature}>
        <span className={styles.text}>Powered by</span>
        <LogtoLogoLight className={styles.highlightIcon} />
        <LogtoLogoShadow className={styles.staticIcon} />
      </a>
    </div>
  );
};

export default LogtoSignature;
