import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";

export default function Login() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });   

  useEffect(() => {
    console.log("Current login values:", value);
  }, []);

  const router = useRouter();
  const onLogin = () => {
    console.log("Login value:", value);
  };

  const onCreateAccount = () => {
    router.navigate("/singup");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            onChangeText={(e) => setValue({...value, email: e})}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter password"
            secureTextEntry
            style={styles.input}
            onChangeText={(e) => setValue({...value, password: e})}
          />
        </View>

        <MyButton title="Login" onPress={onLogin} />
        <MyButton
          title="Create Account"
          onPress={onCreateAccount}
          variant="secondary"
          style={styles.topGap}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F3F4F6",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    gap: 14,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 8,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 14,
  },
  topGap: {
    marginTop: 6,
  },
});
