import { signInWithCredential } from "@/actions/auth";
import AuthForm from "@/components/auth-form";
import { signInSchema } from "@/lib/validation";
import React from "react";

const SignInPage = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={signInWithCredential}
    />
  );
};

export default SignInPage;
