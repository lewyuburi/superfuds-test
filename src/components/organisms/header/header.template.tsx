import React from 'react';
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiCart, mdiChevronDown, mdiMagnify, mdiMenu } from '@mdi/js';

import Logo from '@/components/atoms/logo'
import Avatar from '@/components/atoms/avatar'

import styles from './header.module.scss'

type HeaderTemplateProps = {
  showNavbar: boolean,
  cartItems: number,
  setShowNavbar: (showNavbar: boolean) => void,
  doShowCart: () => void,
}

const HeaderTemplate = (props: HeaderTemplateProps) => {
  return (
    <header className={styles.header}>
      <div className="container">

        <div className={styles.navbar}>

          <Link to="/" className={styles.brand}>
            <Logo
              height="24px"
            />
          </Link>

          <button className={styles.navbarToggle} onClick={() => props.setShowNavbar(!props.showNavbar)}>
            <Icon path={mdiMenu}
              title="Search"
              size={1.5}
            />
          </button>

          <div className={`${styles.navbarCollapse} ${props.showNavbar ? styles.show : ''}`}>

            <div className={styles.searchBarContainer}>
              <div className={styles.searchBar}>
                <input className={styles.searchBarInput} type="search" name="search" id="input-search" placeholder="Busca marcas y productos..." />
                <button className={styles.searchBarButton}>
                  <Icon path={mdiMagnify}
                    title="Search"
                    size={0.75}
                  />
                </button>
              </div>
            </div>

            <nav className={styles.userActions}>
              <button className={styles.cartButton} onClick={props.doShowCart}>
                <Icon path={mdiCart}
                  title="Cart"
                  size={1.5}
                />
                <span className={styles.badge}>
                  {props.cartItems > 9 ? '+9' : props.cartItems}
                </span>
              </button>

              <button className={styles.userActionsDropdown}>
                <div className={styles.userDetail}>
                  <span className={styles.username}>Saiby Alimentos</span>
                  <span className={styles.profileLink}>
                    Mi perfil
                    <Icon path={mdiChevronDown}
                      title="Expand"
                      size={0.75}
                    />
                  </span>

                </div>
                <Avatar src="https://i.pravatar.cc/150?img=7" />
              </button>
            </nav>

          </div>

        </div>

      </div>
    </header>
  );
};

export default HeaderTemplate;
