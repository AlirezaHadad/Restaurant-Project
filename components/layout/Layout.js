import Link from "next/link"

import styles from "./Layout.module.css"

const Layout = ({children}) => {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href="/">Fast Food</Link>
                </div>
                <div className={styles.right}>
                    <Link href="/menu">Menu</Link>
                    <Link href="/categories">Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <span>
                    <a href="https://github.com/AlirezaHadad" target="_blank" rel="noreferrer">
                        Alireza Hadad
                    </a>
                    -Restaurant Project &copy;
                </span>
            </footer>
        </>
    )
}
export default Layout