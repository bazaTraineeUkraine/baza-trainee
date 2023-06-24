'use client';
import { LogOutIcon, SliderMenuArrow } from '@/components/common/icons';
import IconInner from '@/components/common/icons/Spinner/inner';
import IconOuter from '@/components/common/icons/Spinner/outer';
import { MouseEvent, useState } from 'react';
import MenuItem from './MenuItem';
import sidebarSectionsList from './sidebarSectionsList';
import styles from './styles.module.scss';

function Sidebar() {
  const [page, setPage] = useState<string>(sidebarSectionsList[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setPage(e.currentTarget.id);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`${styles['sidebar-wrapper']} ${
          isSidebarOpen ? styles['sidebar-wrapper--extended'] : ''
        }`}
      >
        <div className={styles['sidebar-logo']}>
          <a
            href="#"
            className={styles['sidebar-logo__link']}
            onClick={toggleSidebar}
          >
            <div className={styles['spinner-container']}>
              <IconOuter
                className={`${styles['spinner-outer']} ${
                  isSidebarOpen ? styles['spinner-outer--rotate'] : ''
                }`}
                width={68}
                height={68}
              />
              <IconInner
                className={styles['spinner-inner']}
                width={68}
                height={68}
              />
            </div>
          </a>
        </div>

        <div className={styles['sidebar-menu']}>
          <a
            href="#"
            className={styles['sidebar-logo__close-svg']}
            onClick={toggleSidebar}
          >
            <SliderMenuArrow
              className={`${
                isSidebarOpen ? styles['sidebar-logo__close-svg--mirrored'] : ''
              }`}
            />
          </a>

          <ul className={styles['sidebar-list']}>
            {sidebarSectionsList.map((item) => (
              <MenuItem
                key={item.id}
                sidebarSection={item}
                page={page}
                isSidebarOpen={isSidebarOpen}
                handleClick={handleClick}
              />
            ))}
          </ul>
          <button className={styles['log-out']}>
            <LogOutIcon className={styles['log-out__icon']} />
            <p className={styles['log-out__text']}>{'Вийти'}</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
