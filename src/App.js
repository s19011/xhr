import React from 'react'

const TestView = props => (
  <div>{props.value}</div>
)

class TestForm extends React.component {
  constructor (props) {
      super(props)
      this.state = {value:''}
  }
  handlChange (event) {
      this.setState({ value: event.target.value})
  }
  render () {
    return (
        <form action=''>
            <input type='text' />
            <input type='submit' />
            </form>
    )
  }
}
export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }
}

export default App
