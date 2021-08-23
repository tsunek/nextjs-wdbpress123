import { Button } from "@/components/atoms/Button";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./styles.module.css";

// ログイン中ユーザー表示
export function User() {
  // CSRでsession情報を取得
  const [session] = useSession();
  return (
    <div className={styles.module}>
      <div className={styles.user}>
        <p className={styles.name}>
          {session?.user?.name ? session.user.name : "Guest User"}
        </p>
        <p className={styles.avatar}>
          {session.user && typeof session.user.image === "string" && (
            <img src={session.user.image} />
          )}
        </p>
        <div className={styles.signInOut}>
          {session ? (
            <Button onClick={() => signOut()}>Sign Out</Button>
          ) : (
            <Button onClick={() => signIn()}>Sign In</Button>
          )}
        </div>
      </div>
    </div>
  );
}
