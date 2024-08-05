
import {View} from "react-native";
import IntroScreen from "./introscreen";
import SearchBar from "./searchbar";
import Slider from "./slider";  
import Users from "./users";

export default function HomePage() {
    return (
            <View style={{padding:10}}>
           <IntroScreen />
        <SearchBar />
        <Slider />
        <Users/>
             </View>
  );
}


