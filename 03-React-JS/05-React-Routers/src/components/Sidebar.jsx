
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // Styles defined cleanly in one place
  const styles = {
    sidebar: {
      width: '240px',
      height: '100vh',
      backgroundColor: '#222',
      color: '#fff',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: 'sans-serif',
      position: 'fixed',
      left: 0,
      top: 0,
    },
    title: {
      margin: '0 0 20px 0',
      fontSize: '22px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      marginBottom: '10px',
    },
    link: {
      display: 'block',
      color: '#ccc',
      textDecoration: 'none',
      padding: '10px',
      borderRadius: '4px',
      backgroundColor: '#333',
    }
  };

  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>Dashboard</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link to="/Dashboard" style={styles.link}>Analytics</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/Dashboard/profile" style={styles.link}>Profile</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/Dashboard/users" style={styles.link}>Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;