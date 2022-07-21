import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Dishes from './src/containers/Dishes';
import dishesReducer from './src/store/dishesReducer';


const store = configureStore({reducer: {
  dishes: dishesReducer,
  }})

export default function App() {
  return (
    <Provider store={store}> 
      <Dishes/>
    </Provider>
  );
}