import React from 'react'
import ReactDOM from 'react-dom'
import '../scss/main.scss'

class App extends React.Component {
    constructor() {
      super()
    }
    render() {
        return (
          <div>
            <h1>Hello World</h1>
            <button>Simple Test</button>
          </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
