import LogtoSignature from '../../components/LogtoSignature';

import styles from './index.module.scss';

type Props = {
  readonly children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <div className={styles.viewBox}>
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
          <LogtoSignature className={styles.signature} />
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
