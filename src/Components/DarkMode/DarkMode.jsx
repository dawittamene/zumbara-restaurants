import { useEffect, useState } from 'react'
import DARKMODEIMAGE from '../../assets/website/dark-mode-button.png'
import LIGHTMODEIMAGE from '../../assets/website/light-mode-button.png'
const DarkMode = () => {
    const [theme, settheme] = useState(
        localStorage.getItem("theme") ? 
        localStorage.getItem("theme") : "light"
    ); 
    const element = document.documentElement;
        useEffect(() => {
            if(theme === 'dark'){
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }else{
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light')
            }
        }, [theme])

        const ChangeTheme = () =>{
            if(theme === 'light'){
                settheme('dark');
            }else{
                settheme('light')
            }
        }
  return (
    <>
    {/* button of dark and light using image */}
    <div className=' relative'>
        
        <img className={`w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300  sm:absolute right-0 sm:z-10  sm:-top-0
        ${theme === "dark" ? "opacity-0" : "opacity-100"}` }
        onClick={ChangeTheme} src={DARKMODEIMAGE} alt="DARKMODEIMAGE" />
        <img className='w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 right-0 z-10 -mt-6 sm:mt-0
        ' onClick={ChangeTheme} src={LIGHTMODEIMAGE} alt="LIGHTMODEIMAGE" />

    </div>
        
    </>
  )
}

export default DarkMode