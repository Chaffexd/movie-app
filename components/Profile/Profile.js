import Link from "next/link";

export default function ProfileClient({ picture, name, alt, email }) {
  return (
    <div>
      <img src={picture} alt={alt} />
      <h2>{name}</h2>
      <p>{email}</p>
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
}
