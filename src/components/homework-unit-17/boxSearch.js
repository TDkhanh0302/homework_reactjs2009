import React from 'react'

class BoxSearch extends React.Component {

  render() {
    return (
      <>
        <li className="box-search">
          <input type="text" className="box-search-input" placeholder="Search...." />
          <span className="box-search-icon">
            <i className="fas fa-search" />
          </span>
        </li>
      </>
    )
  }
}

export default BoxSearch
