import Link from "next/link";
import classes from './mainnavigation.module.css'
import IconLogo from "@/assets/IconLogo";

const Login = () => {
  return (
    <div className={classes.loginContainer}>
      <IconLogo />
      <h1 className={classes.title}>Sign up today</h1>
      <Link href="/api/auth/login" className={classes.login}>Login</Link>
    </div>
  );
};

export default Login;
