import * as React from 'react'
import { Link } from 'gatsby'
import Breadcrumb from './breadcrumb'

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Breadcrumb />
            <nav>
                <ul className="no-bullets nav-bar-text">
                    <li><Link className="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover" to="/articles">글모음 articles</Link></li>
                    <li><Link className="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover" to="/about">대하여 about</Link></li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout