import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';

const name = 'Marvin Kotzian';
export const siteTitle = 'Mein Reiseblog';

export default function Layout({children, home}) {
  //reload birds animation on resize
  useEffect(() => {
    window.onresize = function() {
      var birds = document.getElementById('birds');
      var clonedBirds = birds.cloneNode(true);
      birds.parentNode.removeChild(birds);
      document.body.appendChild(clonedBirds);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Marvin Kotzian Reiseblog"
        />
      </Head>
      <header className={styles.header}>

      <div id="birds">
          <div className="bird-container bird-anim-one">
            <div className="bird bird-one" />
          </div>

          <div className="bird-container bird-anim-two">
            <div className="bird bird-two" />
          </div>

          <div className="bird-container bird-anim-three">
            <div className="bird bird-three" />
          </div>

          <div className="bird-container bird-anim-four">
            <div className="bird bird-four" />
          </div>
        </div>
        
        {home ? (
          <>
            <Image
              priority
              src="/images/logo.png"
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/logo.png"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Zurück auf die Startseite</Link>
        </div>
      )}
    </div>
  );
}
