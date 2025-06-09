import Styles from './Button.module.scss';
import Link from 'next/link';

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
};

export default function Button({ children, href, onClick, type = 'button', variant = 'primary' }: ButtonProps) {
    const className = variant === 'secondary' ? Styles.button__secondary : Styles.button__primary;
    if (href) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        );
    }
    return (
        <button className={className} onClick={onClick} type={type}>
            {children}
        </button>
    )
}