import './App.css'
import ParentComponent from './components/classComp/ParentComponent'
import ParentFunctionComponent from './components/functionComp/ParentFunctionComponent'

function App() {

  return (
    <div className='container'>
        <div className='block'>
        <h1>Классовый компонент</h1>
        <ParentComponent/>
      </div>
      <div className='container'>
        <div className='block'>
        <h1>Функциональный компонент</h1>
        <ParentFunctionComponent/>
        </div>
      </div>
    </div>

  )
}

export default App
