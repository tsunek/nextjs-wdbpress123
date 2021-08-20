import { octokit } from "@/utils/fetcher";
import type { InferGetStaticPropsType } from "next";

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  // reposにレスポンスが格納される
  const repos = await octokit.request("GET /users/tsunek/repos", {
    username: "tsunek",
  });
  return { props: { repos } };
};

export default function Page(props: PageProps) {
  if (!props.repos.data) return <>error!</>;

  props.repos.data.map(repo => {
    console.log(repo.url);
  });
  // console.log(props.repos.data);
  return <div>Hello Next.js</div>;
}
