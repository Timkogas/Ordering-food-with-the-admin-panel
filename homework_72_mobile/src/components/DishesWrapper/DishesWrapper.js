import {FlatList, RefreshControl} from "react-native";
import Dish from "./Dish/Dish";

export default function Dishes({dishes, addDishInCartHandler, onRefresh, refreshing}) {
  return (
    <> 
    
    <FlatList 
        data={Object.values(dishes)}
        style={{width: "100%"}}
        keyExtractor={(dish, i)=>{Object.keys(dishes)[i]}}
        refreshControl={
          <RefreshControl key={'1'} refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item}) => 
          <Dish
            name={item.name}
            cost={item.cost}
            img={item.img}
            addDishInCartHandler={()=>{addDishInCartHandler(item.name, item.cost)}}
          />
        }
    />
    </>
  );
}

