import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Layout from './src/components/Layout/Layout';
import Dishes from './src/containers/Dishes';
import dishesReducer from './src/store/dishesReducer';


const store = configureStore({reducer: {
  dishes: dishesReducer,
  }})

export default function App() {
  return (
    <Provider store={store}> 
      <Layout>
        <Dishes/>
      </Layout>
    </Provider>
  );
}