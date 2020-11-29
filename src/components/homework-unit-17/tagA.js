import React from 'react'

class TagA extends React.Component {

  render() {
    const {data} = this.props
    
    return (
      <>
        <a className="link-item" href={data.link}>
          <span className="icon-item">
            <i className={data.icon} />
          </span>

          <span className="text-title">{data.title}</span>

          <p className="text-subtitle">{data.subTitle}</p>
        </a>
      </>
    )
  }
}

export default TagA
