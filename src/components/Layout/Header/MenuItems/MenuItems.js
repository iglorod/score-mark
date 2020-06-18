import React from 'react';

import Actions from './Actions/Actions';
import Auth from './Auth/Auth';
import './MenuItems.css';

const MenuItems = () => {
  return (
    <div className={'menu-items'}>
      <div className={'nav-actions'}>
        <Actions />
      </div>
      <div className={'auth-actions'}>
        <Auth />
      </div>
    </div>
  )
}

export default MenuItems;
