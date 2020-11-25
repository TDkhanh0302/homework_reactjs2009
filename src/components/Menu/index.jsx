import React from 'react'
import './menu.css';
import { FaHome } from 'react-icons/fa';
import { FaFlask } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

class Menu extends React.Component {
  render() {
    return (
      <div class="container">
        <ul>
          <li>
            <a href="">
              <span class="icon">
                <FaHome />
              </span>
            </a>
            <div class="triangle"></div>
          </li>
          <li>
            <div class="triangle-top"></div>
            <div class="triangle-bottom"></div>
            <a href="">
              <span class="icon">
                <FaFlask />
              </span>
              <span class="text-menu">Projects</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li>
            <div class="triangle-top"></div>
            <div class="triangle-bottom"></div>
            <a href="">
              <span class="icon">
                <FaAngleDoubleRight />
              </span>
              <span class="text-menu">Breadcrumb</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li>
            <div class="triangle-top"></div>
            <div class="triangle-bottom"></div>
            <a href="">
              <span class="icon">
                <FaRocket />
              </span>
              <span class="text-menu">Getting started</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li>
            <div class="triangle-top"></div>
            <div class="triangle-bottom"></div>
            <a href="">
              <span class="icon">
                <FaArrowDown />
              </span>
              <span class="text-menu">Download</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
