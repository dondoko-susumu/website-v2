import React from "react"

const defaultState = {
  locale: "ja",
}

const LocaleContext = React.createContext(defaultState);

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
const LocaleContextProvider = ({ children, pageContext: { locale } }) => {
  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export { LocaleContextProvider, LocaleContext }