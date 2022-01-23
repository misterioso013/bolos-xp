import styles from "../styles/whatsapp.module.css";
export default function WhatsApp(){
    return(
            <div className={styles.wp}>
                <a href="#"
                target="_blank">
                    <img src="/images/whatsapp.svg"
                         className={styles.wpIcon}
                    />
                </a>
            </div>
    );
}