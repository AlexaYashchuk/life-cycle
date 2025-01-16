import { useState,useEffect } from "react";

function LifecycleFunctionComponent() {

    const [count,setCount] = useState(0);
    
    const [state,setState] = useState(
        {
            users:[],
            loading:true,
            error:null
        
        });

    const counter = () => {
        setCount(() => count +1)        
    }
    const displayCount = (count % 2 === 0 ? count : count - 1); 

    async function getUserNames() {
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
            setState({ users: data, loading: false });
          } catch (error) {
            setState({ error: error.message, loading: false });
          }
    };


    //componentDidMount
    useEffect(() => {
        console.log(`function comp componentDidMount`);
        getUserNames()
    },[])

    //componentDidUpdate
    useEffect(() => {
        console.log(`function comp componentDidUpdate ${count}`);
    },[count])

    //componentWillUnmount()
    useEffect(() => {
        return () => {
            console.log(`function comp componentWillUnmount`);
        }
    },[])

    //shouldComponentUpdate
    useEffect(() => {
        if (count % 2 === 0) {
            console.log(`shouldComponentUpdate ${count}`)
        }
        
    },[count])

    const { users, loading, error } = state;

    if (loading) {
      return <div>Идет загрузка</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }
    return(
        <>
        <p>Значение: {displayCount}</p>
        <button onClick={counter}>+1</button>
        <hr/>
        <div>
        <h1>Список пользователей</h1>
        <ol>
          {users.map(item => (
            <li>{item.username}</li>
          ))}
        </ol>
      </div>
        </>
    )
}

export default LifecycleFunctionComponent;