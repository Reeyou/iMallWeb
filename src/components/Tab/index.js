import React, { Component } from 'react'
import './index.less'

class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: '0'
    }
  }

//tab切换
handleSelelct = (index) => {
  this.setState({
    currentIndex: index
  })
}

  render() {
    const { tab } = this.props
    return (
      <div className='tab'>
        <div className="tab_nav">
          <ul>
            {
              tab.map((item, index) => (
                <li key={index} className={index == this.state.currentIndex ? 'active' : ''} onClick={() => this.handleSelelct(index)}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default Tab;