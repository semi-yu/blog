import * as React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import '../styles/global.css'

const Breadcrumb = () => {
    const location = useLocation()
    const pathParts = location.pathname.split("/").filter(Boolean);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb no-bullets nav-bar-text">
                <li className="breadcrumb-item"><Link to="/" className="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover">blog</Link></li>
                {pathParts.map((part, index) => {
                    const path = `/${pathParts.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathParts.length - 1;
                    
                    return (
                      <li key={path}>
                        <span>&nbsp;/&nbsp;</span>
                        {isLast ? (
                            <span>{part}</span>
                        ) : (
                            <Link to={path} className="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover">{part}</Link>
                        )}
                      </li>
                    );
                })}
            </ol>
        </nav>
    )
}

export default Breadcrumb;