import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";

const Signup = () => {
  const router = useRouter();

  const onSignup = () => {
    router.navigate("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Signup to get started</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput placeholder="Your name" style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput placeholder="Create password" secureTextEntry style={styles.input} />
        </View>

        <MyButton title="Signup" onPress={() => {}} />
        <MyButton title="Back to Login" onPress={onSignup} variant="secondary" style={styles.topGap} />
      </View>
    </SafeAreaView>
  );
};

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

export default Signup;
