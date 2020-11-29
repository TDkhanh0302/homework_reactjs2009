import React from 'react'
import TagA from './tagA'

class TagLi extends React.Component {
  render() {
    const tagLis = this.props.data.map((tagLi,index) => {
      return <li className="item" key={index}>
        <TagA data={tagLi} />

        {tagLi.children &&
          <ul className="list-item-childrent">
            <TagLi data={tagLi.children} />
          </ul>
        }
      </li>
    })

    return (
      <>
        {tagLis}
      </>
    )
  }
}

export default TagLi
