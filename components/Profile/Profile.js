import Link from "next/link";
import classes from './profile.module.css';
import Image from "next/image";

export default function ProfileClient({ picture, name, alt, email }) {
  return (
    <div>
      <Image src={picture} alt={alt} width={100} height={100} />
      <h2 className={classes.title}>{name}</h2>
      <p>{email}</p>
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
}
