import classNames from 'classnames';
import type { ReactNode } from 'react';

import styles from './index.module.scss';

export type Props = {
  readonly className?: string;
  readonly children?: ReactNode;
};

const ErrorMessage = ({ className, children }: Props) => {
  return (
    <div role="alert" className={classNames(styles.error, className)}>
      {children}
    </div>
  );
};

export default ErrorMessage;
