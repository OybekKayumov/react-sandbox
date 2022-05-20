import './App.css';
import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample from './components/UseCallbackExample';
import CustomHookExample from './components/CustomHookExample';


function App() {
  return (
    <div className="container mt-5" >
      <UseRefExample1 />
      <UseRefExample2 />
      <UseRefExample3 />
      <UseMemoExample /> 
      <UseCallbackExample />     
      <CustomHookExample />
    </div>
  );
}

export default App;
