import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 style={{color:"red", backgroundColor: "black"}}>My first app</h1>

    <Link href="/about">Go to about page</Link>
    
    </>
    

  
  );
}
