import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
} from "react-native";
import { COLORS } from "../constants/colors";

const WelcomeScreen = () => {
  const _topImage = "../../assets/images/top_image.png";
  const _googleImage = "../../assets/images/google_icon.png";
  const _fbImage = "../../assets/images/fb_icon.png";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image style={styles.image} source={require(_topImage)} />
        <View style={styles.BottomContainer}>
          <Text style={styles.title}>Start{"\n"}Your Conversations!</Text>
          <Text style={styles.description}>
            Helpful messaging app that keeps you connected with the people who
            matter most.
          </Text>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => Alert.alert("")}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.circleBtns}>
            <TouchableOpacity
              onPress={() => Alert.alert("")}
              activeOpacity={0.8}
              style={styles.roundButton}
            >
              <Image style={styles.image} source={require(_googleImage)} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Alert.alert("")}
              activeOpacity={0.8}
              style={styles.roundButton}
            >
              <Image style={styles.image} source={require(_fbImage)} />
            </TouchableOpacity>
          </View>
          <Pressable onPress={() => Alert.alert("")}>
            <Text style={styles.dontHaveAccountText}>
              Don't have account?{" "}
              <Text style={styles.registerText}>Register</Text>
            </Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 260,
    resizeMode: "contain",
  },
  BottomContainer: {
    paddingHorizontal: 54,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 12,
    color: COLORS.black80,
  },
  button: {
    alignItems: "center",
    backgroundColor: COLORS.purple,
    marginTop: 25,
    paddingVertical: 18,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  circleBtns: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  roundButton: {
    width: 58,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 100,
    backgroundColor: COLORS.black2,
    borderWidth: 0.8,
    borderColor: COLORS.black6,
  },
  dontHaveAccountText: {
    marginTop: 28,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 16,
    color: COLORS.black65,
  },
  registerText: {
    fontWeight: "bold",
    color: COLORS.black,
  },
});

export default WelcomeScreen;