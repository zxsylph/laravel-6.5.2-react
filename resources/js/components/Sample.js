import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class SampleReactContainer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>This is React Component</h1>
            </div>
          </div>
          <div className='row test'>
            <div className='col'>
              <h1>Class Test</h1>
            </div>
          </div>
          <div className='row test2'>
            <div className='col'>
              <h1>Class Test2</h1>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default SampleReactContainer

if (document.getElementById('SampleReactContainer')) {
  ReactDOM.render(
    <SampleReactContainer />,
    document.getElementById('SampleReactContainer')
  )
}
