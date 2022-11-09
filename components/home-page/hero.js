import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/vlada.jpg"
          alt="An image showing Vlada"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Vlada</h1>
      <p>
        A blog about web dvelopment - focused on JavaScript technology like
        React, Node.js, Next.js etc.
      </p>
    </section>
  );
}

export default Hero;
