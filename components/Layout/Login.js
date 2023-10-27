import Link from "next/link";
import classes from './mainnavigation.module.css'

const Login = () => {
  return (
    <>
      <h1 className={classes.title}>Sign up today</h1>
      <Link href="/api/auth/login" className={classes.login}>Login</Link>
    </>
  );
};

export default Login;
