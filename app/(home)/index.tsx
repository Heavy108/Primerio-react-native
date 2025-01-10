import { Text, View ,StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hoto se chhu Lo Tum mera geet amar kar do !!!!!(HOME)!</Text>
      <Link href="/details/1">View first user details</Link>
      <Link href="/details/2">View Second user details</Link>
      <Link href={{
        pathname:'details/[id]',
        params:{id: 'bacon'},
      }}>View User Details</Link>
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
