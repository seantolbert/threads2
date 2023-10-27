import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Lottie from "lottie-react-native";
import { useRef } from "react";
import { createRandomUser } from "../../utils/generate-dummy-data";


const user = createRandomUser()

console.log(JSON.stringify(user, null, 2))

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);


  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => animationRef.current?.play()}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../lottie-animations/threads.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
          // onAnimationFinish={() => {
          //   alert("finished")
          // }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
