import { GeneratedAt } from "@/components/atoms/GeneratedAt";
import { Loading } from "@/components/atoms/Loading";
import { Template } from "@/components/templates/users/[username]";
import Error from "@/pages/_error";
import { now } from "@/utils/date";
import { octokit } from "@/utils/fetcher";
import type { Endpoints } from "@octokit/types";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

type StaticProps = {
  user: {
    data: Endpoints["GET /users/{username}"]["response"]["data"] | null;
  };
  repos: {
    data: Endpoints["GET /users/{username}/repos"]["response"]["data"] | null;
  };
  err: { status: number; message: string } | null;
  generatedAt: string;
};
type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const propsFactory = (injects?: Partial<StaticProps>) => ({
  props: {
    user: { data: null },
    repos: { data: null },
    err: null,
    generatedAt: now(),
    ...injects,
  },
  revalidate: 10,
});

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // usernameを検証して、不正な場合はエラーを返す
  const username = context.params?.username;
  if (typeof username !== "string") {
    return propsFactory({
      err: { status: 400, message: "BadRequest" },
    });
  }
  // 静的生成用のデータをGitHub APIから取得
  try {
    const param = { username };
    const res = await Promise.all([
      octokit.request("GET /users/{username}", param),
      octokit.request("GET /users/{username}/repos", param),
    ]);
    return propsFactory({ user: res[0], repos: res[1] });
  } catch (err) {
    return propsFactory({
      err: { status: err.status, message: err.message },
    });
  }
};

export default function Page({ user, repos, err, generatedAt }: PageProps) {
  // エラー画面表示
  const router = useRouter();
  if (err) {
    return <Error statusCode={err.status} title={err.message} />;
  }
  if (router.isFallback || !user.data || !repos.data) {
    return <Loading />;
  }
  // アクセス時刻で静的生成
  return (
    <>
      <Template user={user.data} repos={repos.data} />
      <GeneratedAt label={generatedAt} />
    </>
  );
}
