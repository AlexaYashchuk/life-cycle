import React from 'react'
import LifecycleComponent from './LifecycleComponent '

class ParentComponent extends React.Component {

  state = {showCounter: true}


  removeCounter = () => {
    this.setState((state) =>({
      showCounter: !state.showCounter
    }))
  }

  render() {
    return (
      <>
        {this.state.showCounter && <LifecycleComponent />}
        <button onClick={this.removeCounter}>Размонтировать LifecycleComponent</button>       
      </>
    )
  }
 
}

export default ParentComponent