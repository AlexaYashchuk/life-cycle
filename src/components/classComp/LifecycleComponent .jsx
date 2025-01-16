import React from "react";

class LifecycleComponent extends React.Component {
    
    state = {
        count:0,
        error: null,
        loading:true,
        users: []
    };
    

    getUserNames = async() => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhhbmRyYS4xOTlAbWFpbC5ydSIsImlkIjo4ODgsImlhdCI6MTcyNTQzNTMyMH0.PzASr6iVQJlrPyyGkp4Im-YqVRzYfbzLisv4gAuGkE0'; 
        
        try {
            const response = await fetch('https://todo-redev.herokuapp.com/api/users', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`
              },
            });
      
            if (!response.ok) {
              throw new Error('HTTP error! status: ${response.status}');
            }
      
            const data = await response.json();
            this.setState({ users: data, loading: false });
          } catch (error) {
            this.setState({ error: error.message, loading: false });
          }
    };
    componentDidMount() {
        console.log(`componentDidMount`);
        this.getUserNames();
    }

    counter = () => {
        this.setState((state) => ({
            count : state.count+1
        }))
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate ${this.state.count}`);
    }
    componentWillUnmount() {
        console.log(`componentWillUnmount`);
    }
    
    shouldComponentUpdate(nextProps,nextState) {
      console.log(`shouldComponentUpdate`);
      return nextState.count % 2 ===0;
    }
    render() {
        const { users, loading, error } = this.state;

        if (loading) {
          return <div>Идет загрузка</div>;
        }
    
        if (error) {
          return <div>Error: {error}</div>;
        }
    
        return (
            <>
            <p>Значение {this.state.count}</p>
            <button onClick={this.counter}>+1</button>
            <hr/>
        <div>
          <h1>Список пользователей</h1>
            <ol>
                {users.map(item => (
                      //console.log(item),
                  <li>{item.username}</li>
                ))}
            </ol>
      </div>
            </>
            
        )
    }
}

export default LifecycleComponent 