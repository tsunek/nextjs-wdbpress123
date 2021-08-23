import { MyRepos } from "@/components/molecules/MyRepos";
import { UserDescription } from "@/components/molecules/UserDescription";
import styles from "./styles.module.css";

import type { Endpoints } from "@octokit/types";

type Props = {
  user: Endpoints["GET /users/{username}"]["response"]["data"];
  repos: Endpoints["GET /user/repos"]["response"]["data"];
};

export function Template({ user, repos }: Props) {
  return (
    <div>
      <section className={styles.userDescription}>
        <UserDescription user={user} />
      </section>
      <section className={styles.myRepos}>
        <MyRepos username={user.login} repos={repos} />
      </section>
    </div>
  );
}
