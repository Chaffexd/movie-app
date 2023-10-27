"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileClient from "@/components/Profile/Profile";
import Login from "@/components/Layout/Login";

const LoginPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <ProfileClient
      picture={user.picture}
      alt={user.name}
      name={user.name}
      email={user.email}
    />
  ) : (
    <Login />
  );
};

export default LoginPage;
