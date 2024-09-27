"use client"

import './globals.css';
import styles from './styles/Home.module.css';
import { useEffect , useRef , useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter();
  const [panel01Url, setPanel01Url] = useState<string | null>(null);

  useEffect(() => {

  const fetchPanel = async () => {
      try {
        console.log(process.env.NEXT_PUBLIC_API_URL);
        //http://localhost:5000
        //${process.env.NEXT_PUBLIC_API_URL}
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comics/panel01`);
        const data = await res.json();
        setPanel01Url(data.imagePath); 
      } catch (err) {
        console.error('error fetching panel01:', err);
      }
    };

    fetchPanel();

   if (typeof window !== 'undefined') {
      const audio = new Audio('/music/jade wake.mp3');
      audio.loop = true;
      
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
          router.push('/page2');
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
   }
  }, [router]);

  return (
  
  <div className={styles.containerE}>
    <div className={styles.container}>

      <div className={styles.comicWrapper}>

        <div className={styles.comicPanels}>
          {/* <img src="/panels/01.png" className={`${styles.panel} ${styles.fadeInAni}`} /> */}
          {panel01Url ? (
              <img src={panel01Url} className={`${styles.panel} ${styles.fadeInAni2}`} />
            ) : (
              <img src="/panels/01.png" className={`${styles.panel} ${styles.fadeInAni2}`} />
            )}
          {/* <img src="/panels/01.png" className={`${styles.panel} ${styles.fadeInAni2}`} /> */}
        </div>

        <div className={`${styles.text} ${styles.fadeInAni3}`}>
          <p>From a nightmare to biting cold.</p>
        </div>

      </div>

    </div>

    <div className={styles.pagination}>
        <Link href="/page2" className={styles.link}>turn
        </Link>
      </div>

    </div>
  );
}