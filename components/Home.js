import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.body}>
      <Head></Head>

      <div className={styles.header}>
        <p className={styles.icon}>LIVALDI</p>
        <p className={styles.trademark}>DESTOCKAGE DE VETEMENTS</p>
      </div>

      <div className={styles.main}>
        <p>Envie de profiter avant tout le monde de méga bons plans? Remplissez le formulaire ci-dessous afin de recevoir notre newsletter! 🖋️📰</p>
        <p>Les champs marqués d'un astérisque (*) doivent obligatoirement être remplis.</p>
        <form className={styles.form}>
          <label className={styles.label}>
            Prénom*:
            <input name='firstname' className={styles.input} placeholder='John' />
          </label>
          <label className={styles.label}>
            Nom*:
            <input name='lastname' className={styles.input} placeholder='Doe' />
          </label>
          <label className={styles.label}>
            Adresse mail*:
            <input name='email' className={styles.input} placeholder='john.doe@gmail.com' />
          </label>
          <label className={styles.label}>
            Numéro de téléphone:
            <input name='phone' className={styles.input} placeholder='0612345678' />
          </label>


          <input type='submit' value='Je valide!' className={styles.submitBtn} />
        </form>
      </div>

    </div>
  );
}


