import ReactMarkdown from 'react-markdown';
import md from '../README.md?raw';
import styles from './Instructions.module.scss';

export const Instructions = () => (
    <div className={ styles.container }>
        <code className={ styles.code }>
            <ReactMarkdown>{ md }</ReactMarkdown>
        </code>
    </div>
);