import { useState } from 'react';
import styles from '../src/styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
  const [index,setIndex] = useState(0)

    const images = [
      '/images/hero.svg',
      '/images/hero2.svg',
      '/images/hero3.svg',
    ];

    const handleArrow = (direction)=>{
      if(direction === "l"){
        setIndex(index !== 0 ? index-1 : 2)
      }
      if (direction === 'r') {
        setIndex(index !== 2 ? index + 1 : 0);
      }
    }

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image
          src="/images/leftarrow.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image
          src="/images/rightarrow.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
