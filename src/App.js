import './App.css';
import Code from './components/code/Code';
import Header from './components/header/Header';
import Result from './components/result/Result';

function App() {
  return (
    <div className='Appcontainer'>
      <Header/>
      <main className='mainapp'>
        <Code/>
      </main> 
      <Result/>
    </div>
  );
}

export default App;
