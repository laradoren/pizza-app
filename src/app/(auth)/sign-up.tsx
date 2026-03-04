import { Button } from "@/components/Button";
import Colors from "@/constants/Colors";
import { Text, TextInput, View } from "@components/Themed";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function SignUpScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignIn = () => {};

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign Up" }} />

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        keyboardType="numeric"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button text={"Sign In"} onPress={onSignIn}></Button>
      <Link href={`/sign-in`} asChild>
        <Pressable>
          <Text style={styles.account}>Already have an account?</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    color: "gray",
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    backgroundColor: Colors.light.productItem,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
    borderBlockColor: Colors.light.tint,
    borderWidth: 1,
    borderStyle: "solid",
  },
  textButton: {
    backgroundColor: Colors.light.productItem,
  },
  account: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
  },
});
