import Styles from './Button.module.scss';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
};

export default function Button({
  children,
  href,
  target,
  rel = target === '_blank' ? 'noopener noreferrer' : undefined,
  onClick,
  type = 'button',
  variant = 'primary'
}: ButtonProps) {
  const className =
    variant === 'secondary' ? Styles.button__secondary : Styles.button__primary;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
