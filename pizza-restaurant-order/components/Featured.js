import styles from '../src/styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
  const images = [
    '/images/oatmeal.png',
    '/images/brownie.png',
    '/images/chiapudding.png',
  ];
  return (
    <div className={styles.container}>
      <Image src="/images/leftarrow.svg" alt="" layout="fill" />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((img, i) => (
            <Image src="/images/coffee.png" alt="" key={i} layout="fill" />
          ))}
        </div>
      </div>
      <Image src="/images/rightarrow.svg" alt="" layout="fill" />
    </div>
  );
};

export default Featured;
