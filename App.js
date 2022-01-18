import './App.css';
import 'tachyons'
import Register from './Register';
import Trainer from './Trainer';
import Membership from './Membership';
function App() {
  return (
   <div  className='' style={{backgroundImage:"linear-gradient(315deg, #734ae8 0%, #89d4cf 74%)", backgroundColor:"734ae8"}}>
    
    <div className='flex'  style={{backgroundImage:"linear-gradient(315deg, #ffffff 0%, #96e4df 74%);", backgroundColor:"4dccc6"}}>
      <h1 className='i grow shadow-5 dib dark-blue br3 ba  center' >Aesthetics Gym</h1>
    </div>
      <div className='flex justify-content-center '>
      <Register/>
      <Trainer/>
      <Membership/>
      </div>
      
   </div>
  );
}

export default App;

// background-color: #4dccc6;
// background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);