const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

 const bodyJs = document.querySelector('body')

 const savedTheme = localStorage.getItem('Theme')

 const themeSwitch = document.querySelector('.theme-switch__toggle')

 themeSwitch.addEventListener('change', onSwitchCheckBox)   

 bodyJs.classList.add('light-theme')

 const setSavedTheme = function () {
    if(savedTheme === 'dark') {
    setDarkTheme()
    themeSwitch.setAttribute('checked', true)
   }
 }


  setSavedTheme()



 function setDarkTheme () {
   bodyJs.classList.add('dark-theme')||bodyJs.classList.remove('light-theme')    
   localStorage.setItem('Theme', 'dark');
 }

 function setLightTheme () {
   bodyJs.classList.remove('dark-theme')||bodyJs.classList.add('light-theme')
   localStorage.setItem('Theme', 'light')
 }

 function onSwitchCheckBox (e) {
   setDarkTheme ()
     if(!e.target.checked) {setLightTheme ()
    }    
 }

