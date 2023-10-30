import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import pikachu2 from "./assets/pikachu2.png";
import { useState } from "react";

export default function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [text, setText] = useState("");

  console.log(text);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Hello React Native</Text>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 20, color: "pink", fontWeight: 20 }}>
          드디어 네이티브다!!!
        </Text>
        <Image
          source={{
            uri: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001801.png",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image source={pikachu2} style={styles.pikachu2} />
        <Image
          source={{
            uri: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002601.png",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000301.png",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000901.png",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000601.png",
          }}
          style={{ width: 400, height: 400 }}
        />
        <TextInput
          placeholder="이름을 입력하세요!!!"
          onChangeText={setText}
          value={text}
        />
        <Switch value={isTrue} onValueChange={() => setIsTrue(!isTrue)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },

  pikachu2: {
    width: 400,
    height: 400,
    padding: 0,
    marginTop: 10,
  },
});
