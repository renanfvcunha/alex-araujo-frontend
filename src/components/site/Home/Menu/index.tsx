import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { IconButton, Menu as MenuEl, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon, WhatsApp } from '@material-ui/icons';

import useStyles from './styles';
import { Menu as IMenu } from '~/typescript/ISitePrincipal';
import getImageUrl from '~/utils/getImageUrl';

type Menu = {
  menu: IMenu;
};

export default function Menu({ menu }: Menu) {
  const classes = useStyles();
  const router = useRouter();

  const [ancholEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(ancholEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = (href: string) => {
    router.push(href);
    setAnchorEl(null);
  };

  return (
    <>
      <nav className={classes.nav}>
        <IconButton
          aria-label="menu"
          onClick={handleClick}
          className={classes.menuIcon}
        >
          <MenuIcon />
        </IconButton>
        <MenuEl
          anchorEl={ancholEl}
          keepMounted
          open={open}
          onClose={handleCloseMenu}
        >
          <MenuItem
            className={classes.menuItemMb}
            onClick={() => handleCloseMenu('#quem-somos')}
          >
            Quem Somos
          </MenuItem>
          <MenuItem
            className={classes.menuItemMb}
            onClick={() => handleCloseMenu('#servicos')}
          >
            Serviços
          </MenuItem>
          {/* <MenuItem
            className={classes.menuItemMb}
            onClick={() => handleCloseMenu('#noticias')}
          >
            Notícias
          </MenuItem> */}
          <MenuItem
            className={classes.menuItemMb}
            onClick={() => handleCloseMenu('#contato')}
          >
            Contato
          </MenuItem>
          {/* <MenuItem
            className={classes.menuItemMb}
            onClick={() => handleCloseMenu('#area-cliente')}
          >
            Área do Cliente
          </MenuItem> */}
        </MenuEl>

        <div className={classes.container}>
          <ul className={classes.menu} aria-label="menu">
            <li className={classes.menuItem}>
              <Link href="#quem-somos">Quem Somos</Link>
            </li>
            <li className={classes.menuDivider} />
            <li className={classes.menuItem}>
              <Link href="#servicos">Serviços</Link>
            </li>
            {/* <li className={classes.menuDivider} />
            <li className={classes.menuItem}>
              <Link href="#noticias">Notícias</Link>
            </li> */}
            <li className={classes.menuDivider} />
            <li className={classes.menuItem}>
              <Link href="#contato">Contato</Link>
            </li>
            {/* <li className={classes.menuDivider} />
            <li className={clsx(classes.menuItem, classes.clientArea)}>
              <Link href="#area-cliente">Área do Cliente</Link>
            </li> */}
          </ul>
        </div>
      </nav>

      <div className={clsx(classes.nav, classes.posRelative)}>
        <Image
          src={getImageUrl(menu.imagem.url)}
          alt={menu.imagem.alternativeText}
          width={1140}
          height={400}
        />
        <a
          className={classes.imgButtons}
          href={`https://wa.me/${menu.whatsapp}`}
          target="_blank"
          rel="external noreferrer noopener"
        >
          <div className={classes.btnWApp}>
            <WhatsApp style={{ color: '#fafafa' }} />
          </div>
          <div className={classes.btnGetPrice}>
            <span>Solicitar Cotação</span>
          </div>
        </a>
      </div>
    </>
  );
}
