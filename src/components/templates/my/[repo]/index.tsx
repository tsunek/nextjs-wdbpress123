import { RepoCommits } from "@/components/molecules/RepoCommits";
import { RepoDescription } from "@/components/molecules/RepoDescription";
import Link from "next/link";
import type { Endpoints } from "@octokit/types";

type Props = {
  repo: Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
  commits: Endpoints["GET /repos/{owner}/{repo}/commits"]["response"]["data"];
};

export function Template({ repo, commits }: Props) {
  return (
    <div>
      <Link href="/my">
        <a>&lt; Back</a>
      </Link>
      <RepoDescription repo={repo} />
      <RepoCommits commits={commits} />
    </div>
  );
}
