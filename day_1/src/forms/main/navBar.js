import React from 'react';
import '../../css/nav.css'

function navBar() {
    return (
        <nav className="Nav">
            <span className="Nav_title">Day_1</span>
            <div className="Navi">
              <a className="Navs" href="/">
                로그인
              </a>
            </div>
        </nav>
    );
}

export default navBar;