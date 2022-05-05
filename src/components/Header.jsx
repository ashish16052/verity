import React from "react";
import { Link } from "react-router-dom";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function Header() {
    return <header>
        <h1>
            <LibraryBooksIcon />
            Verity
        </h1>
        <div className="links">
            <Link to="/">Blogs</Link>
            <Link to="/write">Write</Link>
            <Link to="/update">Update</Link>
        </div>
    </header>;
}

export default Header;