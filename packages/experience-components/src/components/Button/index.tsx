import classNames from 'classnames';
import { type HTMLProps } from 'react';
import { useDebouncedLoader } from 'use-debounced-loader';

import LoadingRing from '../../assets/loading-ring.svg?react';

import styles from './index.module.scss';

export type ButtonType = 'primary' | 'secondary';

type BaseProps = Omit<HTMLProps<HTMLButtonElement>, 'type' | 'size' | 'title'> & {
  readonly htmlType?: 'button' | 'submit' | 'reset';
  readonly type?: ButtonType;
  readonly size?: 'small' | 'large';
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;
  readonly className?: string;
  readonly onClick?: React.MouseEventHandler;
};

type Props = BaseProps & {
  readonly icon?: React.ReactNode;
};

const Button = ({
  htmlType = 'button',
  type = 'primary',
  size = 'large',
  children,
  className,
  isDisabled = false,
  isLoading = false,
  icon,
  onClick,
  ...rest
}: Props) => {
  const isLoadingActive = useDebouncedLoader(isLoading, 300);

  return (
    <button
      disabled={isDisabled}
      className={classNames(
        styles.button,
        styles[type],
        styles[size],
        isDisabled && styles.disabled,
        isLoadingActive && styles.loading,
        className
      )}
      type={htmlType}
      onClick={onClick}
      {...rest}
    >
      <span className={styles.icon}>
        {isLoadingActive ? <LoadingRing className={styles.loadingIcon} /> : icon}
      </span>
      {children}
    </button>
  );
};

export default Button;
