import React from 'react';

const Greeting = props => (
    <li>{props}</li>
)
class App extends React.Component() {
    constructor (props) {
        super(props) 
        this.state = {data: [] }
    }
    componentDidMount () {
        fetch('./messages.json')
            .then(res => res.json())
            .then(json => json.messages)
            .then(json => this.state)
    render () {
        const greeting = this.state.date

        v => <Greeting type => {v} />
      
      <Greeting type={this.state.date[]}/>
      
      return (
          <ul>
         
      ) 
    }
}

 
export default App;
