import Link from "next/link";
import styles from './page.module.css'

export default function Navbar(){
    return(
        <div className={styles.nav}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>


        </div>
    )
}