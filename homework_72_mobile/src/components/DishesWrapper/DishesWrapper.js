import {FlatList, ScrollView, Text} from "react-native";
import Dish from "./Dish/Dish";

export default function Dishes({dishes}) {
  return (
    <>
      {/* <FlatList 
        data={dish}
        style={{width: "100%"}}
        renderItem={({item}) => 
        <Post 
          keyExtractor={(item)=>{item.data.id}}
          img={item.data.thumbnail ? item.data.url_overridden_by_dest : item.data.thumbnail}
          text={item.data.title}
        />
      }
      /> */}
      <ScrollView>
      {Object.values(dishes).map((dish, i)=>{
          const dishID = Object.keys(dishes)[i]
          return (
            <Dish
              key={dishID}
              name={dish.name}
              cost={dish.cost}
              img={dish.img}
            />
          )
        })}
      </ScrollView>
    </>
  );
}

