import { Layout } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import UserForm from "@/components/UserForm";
import AppHerder from "@/components/AppHerder";

const { Content } = Layout;

export default function SingIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
  };

  const onFinishFailed = (errorInfo) => {
  };

  return (
    <Content className="h-screen flex items-center place-content-center">
      <AppHerder title="sign in" />
      <div>
        <Link href="/">index</Link>
        <br />
        <Link href="/sign-in">sign-in</Link>
        <br />
        <Link href="/sign-up">sign-up</Link>
        <br />
      </div>
      <div className="bg-orange-200 p-3">
        <UserForm onFinish={onFinish} onFinishFailed={onFinishFailed} loading={loading} />
        <Link href="/sign-up">Create a new account</Link>
      </div>
    </Content>
  );
}

