import { Text, View ,StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
export default function DetailScreen() {
  const {id} =useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Tum itna jo Muskara rhe ho!!!(HOME)</Text>
      <Text>Tere umeed par thukra rha hu is duniya ko {id}</Text>
      <Link href="/">Home</Link>
    </View>
  );
}
const styles =StyleSheet.create({
  container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"green",
        // fontWeight:"700"
      },
})
