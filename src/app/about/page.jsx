import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function About(){
    return(

        //if we are inside the return and we use {}, it indicates
        // that we want to perform a javascript
        <>
        <h1 className={styles.text}>this is my new project</h1>
        <p className={`${styles.text} text`}>I am styled with the global css</p>

        <Link href="/">To home page</Link>
        </>
        
        
    );
   
}