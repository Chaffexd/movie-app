"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileClient from "@/components/Profile/Profile";

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
    <>
      <h1>Sign up today</h1>
      <Link href="/api/auth/login">Login</Link>
    </>
  );
};

export default LoginPage;
