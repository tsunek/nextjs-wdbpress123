import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { JWT } from "next-auth/jwt";

if (typeof process.env.GITHUB_OAUTH_CLIENT_ID !== "string") {
  throw new Error("Undefined GITHUB_OAUTH_CLIENT_ID");
}
if (typeof process.env.GITHUB_OAUTH_CLIENT_SECRET !== "string") {
  throw new Error("Undefined GITHUB_OAUTH_CLIENT_SECRET");
}

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_OAUTH_CLIENT_ID,
      clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      scope: "repo", // リポジトリ閲覧権限を指定
    }),
  ],
  // accessTokenを参照するため、callbacksの指定が必要
  callbacks: {
    async jwt(token, user, account) {
      // サインイン直後にjwt関数で取得したaccessTokenをトークンにセット
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    async session(session, userOrToken) {
      // sessionからaccessTokenを参照できるように設定
      return Promise.resolve({
        ...session,
        accessToken: (userOrToken as JWT).accessToken as string,
      });
    },
  },
});
