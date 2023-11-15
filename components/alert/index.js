import styles from './alert.module.css';
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
    console.log(children)
    console.log(type)
    return (
        <div
            className={clsx({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
        >
            {children}
        </div>
    );
}