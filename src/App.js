import { MdOutlineClose } from 'react-icons/md';
import './global.css';
import './styles.css';
import { IoMdAdd } from 'react-icons/io';


function App() {
  return (
    <div className="App">
      <div className='todo'>
        <header>
          <input type='text' />
          <button><IoMdAdd /></button>
        </header>
        <div className='task-container'>
          <div className='check-and-title'>


            <label className='checkbox-container'>
              <input type='checkbox' />

              <span className='checkmark'></span>
            </label>

            <p>Criar video</p>

          </div>

          <div>
            <MdOutlineClose />
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
