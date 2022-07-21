import {ScrollView} from "react-native";
import Dish from "./Dish/Dish";

export default function Dishes({dishes, addDishInCartHandler}) {
  return (
    <>
      <ScrollView>
      {Object.values(dishes).map((dish, i)=>{
          const dishID = Object.keys(dishes)[i]
          return (
            <Dish
              key={dishID}
              name={dish.name}
              cost={dish.cost}
              img={dish.img}
              addDishInCartHandler={()=>{addDishInCartHandler(dish.name, dish.cost)}}
            />
          )
        })}
      </ScrollView>
    </>
  );
}

