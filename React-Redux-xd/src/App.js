import Posts from './components/Posts';
import PostForm from './components/PostForm';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
     <Provider store={store}>
         <div className="App" style={{display: 'flex', justifyContent: 'space-between', margin: "2rem"}}>
            <div style={{paddingRight: "5rem"}}>
              <PostForm />
            </div>
            <Posts />
        </div>
     </Provider>
  );
}

export default App;
