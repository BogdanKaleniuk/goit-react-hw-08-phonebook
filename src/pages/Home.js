import { Image } from '@chakra-ui/react';

import image from '../images/5177903.png';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        PhoneBook
        <Image src={image} alt="img" objectFit="cover" width="500px" />
      </h1>
    </div>
  );
}
