import { useContext } from "react"
import DarkThemeContext from "../DarkthemeContext"

const ThemeButton = () => {
  const theme = useContext(DarkThemeContext);


  return(
    <button onClick={theme.toggle}>{theme.darkTheme ? "Dark" : "Light"}</button>
  )
}

export default ThemeButton
