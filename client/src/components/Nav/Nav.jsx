import { NavLink } from "react-router-dom"
import styles from './Nav.module.css'

function Nav()
{
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.nav}`}>
                <div className="container-fluid">
                    <NavLink className={ ({ isActive }) => `navbar-brand ms-2 ${styles.brand} ${isActive ? styles.active : ''}` } to="/"><img src="/images/phishy_logo_7.png" height={30} className="me-2"/>PHISHY</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-3 mt-1 mt-lg-0" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-2">
                                <NavLink className={ ({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}` } to="/campaigns"><i class="fa-solid fa-fish-fins"></i> Campaigns</NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink className={ ({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}` } to="/templates"><i class="fa-brands fa-html5"></i> Templates</NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink className={ ({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}` } to="/logs"><i class="fa-solid fa-file"></i> Logs</NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink className={ ({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}` } to="/targets"><i class="fa-solid fa-users-viewfinder"></i> Targets</NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink className={ ({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}` } to="/analytics"><i class="fa-solid fa-chart-simple"></i> Analytics</NavLink>
                            </li>
                            <li className="nav-item dropdown me-2">
                                <NavLink className={`nav-link dropdown-toggle ${styles.navLink}`} to="/settings" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i> Settings</NavLink>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><NavLink className={ ({ isActive }) => `dropdown-item ${styles.navLink} ${styles.dropdownNavLink} ${isActive ? styles.active : ''}` } to="/adminserver"><i class="fa-solid fa-server"></i> Admin Server</NavLink></li>
                                    <li><NavLink className={ ({ isActive }) => `dropdown-item ${styles.navLink} ${styles.dropdownNavLink} ${isActive ? styles.active : ''}` } to="/phishyserver"><i class="fa-solid fa-fish"></i> Phishy Server</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink className={ ({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}` } to="https://github.com/Aquarrii/PHISHY" target="_blank"><i class="fa-brands fa-github"></i> Source</NavLink>
                            </li>
                        </ul>
                        <ul className='navbar-nav ms-auto me-2'>
                            <li className="nav-item">
                                <NavLink className={ ({ isActive }) => `nav-link ${styles.navLink} ${isActive ? styles.active : ''}` } to="/logout"><i class="fa-solid fa-right-to-bracket"></i> Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav