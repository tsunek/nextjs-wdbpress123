import { octokit } from "@/utils/fetcher";

export const getStaticProps = async () => {
  // reposにレスポンスが格納される
  const repos = await octokit.request("GET /users/tsunek/repos", {
    username: "tsunek",
  });
  return { props: { repos } };
};

export default function Page(props: any) {
  if (!props.repos.data) return <>error!</>;
  console.log(props.repos.data);
  return <div>Hello Next.js</div>;
}
