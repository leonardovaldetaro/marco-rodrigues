import Styles from './Button.module.scss';
import Link from 'next/link';

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
};

export default function Button({ children, href, onClick, type = 'button' }: ButtonProps) {
    if (href) {
        return (
            <Link href={href} className={Styles.button}>
                {children}
            </Link>
        );
    }
    return (
        <button className={Styles.button} onClick={onClick} type={type}>
            {children}
        </button>
    )
}