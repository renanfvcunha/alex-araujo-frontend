import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { IconButton, Menu as MenuEl, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import useStyles from './styles';

export default function Menu() {
  const classes = useStyles();
  const [ancholEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(ancholEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
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
        <MenuItem className={classes.menuItemMb} onClick={handleCloseMenu}>
          <Link href="#quem-somos">Quem Somos</Link>
        </MenuItem>
        <MenuItem className={classes.menuItemMb} onClick={handleCloseMenu}>
          <Link href="#servicos">Serviços</Link>
        </MenuItem>
        <MenuItem className={classes.menuItemMb} onClick={handleCloseMenu}>
          <Link href="#noticias">Notícias</Link>
        </MenuItem>
        <MenuItem className={classes.menuItemMb} onClick={handleCloseMenu}>
          <Link href="#contato">Contato</Link>
        </MenuItem>
        <MenuItem className={classes.menuItemMb} onClick={handleCloseMenu}>
          <Link href="#area-cliente">Área do Cliente</Link>
        </MenuItem>
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
          <li className={classes.menuDivider} />
          <li className={classes.menuItem}>
            <Link href="#noticias">Notícias</Link>
          </li>
          <li className={classes.menuDivider} />
          <li className={classes.menuItem}>
            <Link href="#contato">Contato</Link>
          </li>
          <li className={classes.menuDivider} />
          <li className={clsx(classes.menuItem, classes.clientArea)}>
            <Link href="#area-cliente">Área do Cliente</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
