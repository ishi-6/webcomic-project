"use client"

import '../globals.css';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page2() {
  const router = useRouter();
  
  
  useEffect(() => {

    // if (typeof window !== 'undefined') {
      // const audio = new Audio('/music/jade wake.mp3');
      // audio.play();
      // audio.autoplay = true;
      
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
          router.push('./page3');
        }
        if (event.key === 'ArrowLeft') {
          router.push('./');
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
   // }
  }, [router]);



  return (
  

    <div className={styles.containerE}>
      <div className={styles.pagination}>
        <Link href="/" className={styles.link}>return
        </Link>
        </div>
<div className={styles.container}>
<div className={styles.comicWrapper}>
  <div className={styles.comicPanels}>
    <img src="/panels/02.png" className={styles.panel} />
  </div>
  <div className={styles.text}> 
    <p>...</p>
  </div>
</div>
<div className={styles.container}>
<div className={styles.comicWrapper}>
  <div className={styles.comicPanels}>
    <img src="/panels/03.png" className={styles.panel} />
  </div>
  <div className={styles.text}> 
    <p>...Woah.</p>
  </div>
</div>
</div>
</div>
<div className={styles.pagination}>
        <Link href="/page3" className={styles.link}>turn
        </Link>
      </div>

</div>

  );
}