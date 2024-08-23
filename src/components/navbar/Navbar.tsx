import { NavbarBrand, NavbarContent, Navbar as NextUiNavbar } from "@nextui-org/react"
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher"

export const Navbar = (props: {changeLanguage: () => void}) => {

  return <NextUiNavbar>
    <NavbarBrand>Steven Reis</NavbarBrand>
    <NavbarContent justify="end">
      <button onClick={props.changeLanguage}>Mudar idioma</button>
      <ThemeSwitcher />
    </NavbarContent>
  </NextUiNavbar>
}