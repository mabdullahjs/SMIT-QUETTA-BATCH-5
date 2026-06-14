import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router"

const Dashboard = () => {
  // Container to hold both Sidebar and Main Content side-by-side
  const dashboardStyle = {
    display: 'flex',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#f8fafc', // Optional light background for the whole dashboard
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  };

  // Main content area style
  const mainContentStyle = {
    flexGrow: 1,
    /* CRITICAL: If your sidebar is 'position: fixed', use marginLeft: '240px'.
      If your sidebar is NOT fixed, flexbox handles it automatically, 
      but adding padding keeps your content breathing.
    */
    marginLeft: '240px', 
    padding: '30px',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif'
  };

  return (
    <div style={dashboardStyle}>
      <Sidebar />
      <main style={mainContentStyle}>
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard