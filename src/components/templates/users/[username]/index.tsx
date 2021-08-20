import { UserDescription } from "@/components/molecules/UserDescription";
import { UserRepos } from "@/components/molecules/UserRepos";
import type { Endpoints } from "@octokit/types";
import styles from "./styles.module.css";

type Props = {
  user: Endpoints["GET /users/{username}"]["response"]["data"];
  repos: Endpoints["GET /users/{username}/repos"]["response"]["data"];
};

export function Template({ user, repos }: Props) {
  return (
    <div>
      <section className={styles.userDescription}>
        <UserDescription user={user} />
      </section>
      <section className={styles.userRepos}>
        <UserRepos username={user.login} repos={repos} />
      </section>
    </div>
  );
}
