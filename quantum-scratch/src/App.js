import React, {Component} from "react"
import NavBar from "./NavBar"
import BlockArea from "./BlockArea"
import CodeArea from "./CodeArea"
import OutputArea from "./OutputArea"

class App extends Component {
    render() {
      return (
        <div className='container'>
            <div className="Header">
                <NavBar />
            </div>
            <div className="page">
                <BlockArea />
                <CodeArea />
                <OutputArea />
            </div>
        </div>
      )
    }
  }

  export default App