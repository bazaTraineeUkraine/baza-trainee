'use client';
import { dictionaries } from '@/app/[lang]/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

const Page404 = () => {
  const pathname = usePathname();
  const lang = pathname
    .substring(pathname.indexOf('ua' || 'pl' || 'en'), 3)
    .replace('/', '');
  const dict = dictionaries[lang as TLandingLanguage];
  // const getDictionary = async () => {
  //   const lang = (await localStorage.getItem('landingLanguage')) || 'ua';
  //   setDict(await dictionaries[lang]());
  // };
  return (
    <section className={styles.error}>
      <div className="m-auto max-w-[120rem]">
        <p className={styles.error__digits}>404</p>
        <h2 className={styles.error__title}>{dict?.notFound?.title}</h2>
        <p className={styles.error__description}>
          {dict?.notFound?.description}
        </p>
        <a href="/ua" className={styles['error__back-home-link']}>
          {dict?.notFound?.button}
        </a>
      </div>
    </section>
  );
};

export default Page404;
