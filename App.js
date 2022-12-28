import { ScrollView, StyleSheet, View } from "react-native";
import FormHeader from "./app/components/FormHeader";
import FormSelectorBtn from "./app/components/FormSelectorBtn";
import LoginForm from "./app/components/LoginForm";
import SignUpForm from "./app/components/SignUpForm";

const App = () => {
  return (
    <View style={{ flex: 1, paddingTop: 80 }}>
      <View style={{ height: 80 }}>
        <FormHeader
          leftHeading={"Welcome"}
          rightHeading={"Back"}
          subHeading={"Youtube Task Manager"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor="rgba(27,27,51,1)"
          title="Login"
        />
        <FormSelectorBtn
          style={styles.borderRight}
          backgroundColor="rgba(27,27,51,0.4)"
          title="Sign up"
        />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <LoginForm />
        <ScrollView>
          <SignUpForm />
        </ScrollView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default App;
