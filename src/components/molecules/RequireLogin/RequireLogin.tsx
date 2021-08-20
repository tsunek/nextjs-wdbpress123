import {Button} from "@/components/atoms/Button";
import {signIn} from "next-auth/client";
import styles from "./styles.module.css";

export function RequireLogin() {
  return (
    <div className={styles.module}>
      <h1>Unauthorized.</h1>
      <p className={styles.description}>
        This contents needs your github premissions.
        <br />
        please sing in.
      </p>
      <Button className={styles.hutton} onClick={() => signIn()}>
        Sign in whith Github
      </Button>
    </div>
  );
}