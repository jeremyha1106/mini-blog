import React from 'react';
import './App.scss';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'

const menuList = [
  {
    name: 'Home',
    link: '#'
  },
  {
    name: 'Politics',
    link: '#'
  },
  {
    name: 'Tech',
    link: '#'
  },
  {
    name: 'Entertainment',
    link: '#'
  },
  {
    name: 'Travel',
    link: '#'
  },
  {
    name: 'Sports',
    link: '#'
  },
];

export const App = () => {
  return (
    <>
      <div className="site-wrap">
        <header>
          <div className="header-logo">
            <a href="index.html" className="header-logo__text">Mini Blog</a>
          </div>

          <div className="header-menu">
            <nav role="navigation">
              <ul className="header-menu__wrapper">
                {menuList.map((item, index) => (
                  <li key={index}><a href={item.link}>{item.name}</a></li>
                ))}
                <li>
                  <FaSearch />
                </li>
              </ul>
            </nav>
          </div>
          <div className="site-mobile-menu">
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
            <label for="drawer-toggle" id="drawer-toggle-oepn">
              <FaBars />
            </label>
            <div id="drawer">
              <div className="drawer__content">
                <ul>
                  {menuList.map((item, index) => (
                    <li key={index}><a href={item.link}>{item.name}</a></li>
                  ))}
                </ul>
              </div>
              <label for="drawer-toggle" id="drawer-toggle-close">
                <FaTimes />
              </label>
            </div>
          </div>
        </header>

        <div className="site-banner" style={{ backgroundImage: 'url(images/img_2.jpg)' }}>
          <div class="container">
            <div class="row same-height justify-content-center">
              <div class="col-md-12 col-lg-10">
                <div className="post-info">
                  <span className="post-category mb-4">Nature</span>
                  <h1 className="post-title mb-4">
                    <a href="index.html">
                      The AI magically removes moving objects from videos.
                    </a>
                  </h1>
                  <div className="post-meta">
                    <figure className="post-meta__author"><img src="images/person_1.jpg" alt="Person" /></figure>
                    <span>By Carrol Atkinson</span>
                    <span>&nbsp;-&nbsp; February 10, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
