import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { ReactComponent as IconMenu } from '../../images/icon-menu.svg'
import { ReactComponent as IconMenuClose } from '../../images/icon-close-menu.svg'
import Button from './Button'
import { COMPANY, FEATURES } from './constants'
import NavItem from './Nav-item'
import NavMenu from './NavMenu'
import { useState } from 'react'
import MobileMenu from '../MobileMenu'

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className="flex items-center">

      <LogoIcon />

      <nav className="hidden xl:flex flex space-x-6 ml-8 items-center">
        <NavItem text="Feature">
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text={'Company'}>
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text={'Careers'} />
        <NavItem text={'About'} />
      </nav>

      <div className="hidden xl:flex ml-auto flex space-x-5">
        <Button hasBorder=""> Loggin </Button>
        <Button hasBorder={true}> Register </Button>
      </div>

      <div
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="flex xl:hidden ml-auto cursor-pointer z-30"
      >
        {isMobileOpen ? <IconMenuClose /> : <IconMenu />}
      </div>

      <MobileMenu isOpen={isMobileOpen}/>

    </header>
  )
}

export default Header
