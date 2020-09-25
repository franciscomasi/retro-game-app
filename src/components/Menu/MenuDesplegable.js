import * as React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'

const MenuDesplegable = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  return (
    <div>
      <MenuIcon variant="contained" {...bindTrigger(popupState)} />
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Mario Bross</MenuItem>
        <MenuItem onClick={popupState.close}>Robocop</MenuItem>
        <MenuItem onClick={popupState.close}>Battle City</MenuItem>
        <MenuItem onClick={popupState.close}>Contra Force</MenuItem>
      </Menu>
    </div>
  )
}

export default MenuDesplegable
