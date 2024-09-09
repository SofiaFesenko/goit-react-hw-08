import AppBar from "./AppBar"

function Layout({children}) {
    return (
      <>
        <AppBar/>
        {children}
      </>
    )
}

export default Layout