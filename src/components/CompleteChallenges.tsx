import styles from '../styles/components/CompleteChallenges.module.css';

export function CompleteChallenges(){
    return(
        <div className={styles.completedChallenges}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    );
}