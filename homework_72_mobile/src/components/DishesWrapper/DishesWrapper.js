import {FlatList, Text} from "react-native";
import Dish from "./Dish/Dish";

export default function Dishes({dish}) {
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
      <Text>Ddasd</Text>
    </>
  );
}

