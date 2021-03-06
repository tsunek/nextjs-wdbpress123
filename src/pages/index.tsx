import { Template } from "@/components/templates";
import React from "react";

// import Head from 'next/head'
// import styles from '@/styles/Home.module.css'

// export async function getStaticPaths() {
//   return {
//     // params.idとして固定値1と2を渡す
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   // getStaticPathsから渡されるparamsでid1と2を固定で受け取る
//   const res = await fetch(`https://.../posts/${ params.id }`);
//   const posts = await res.json();
//   // pave componentにpropsとして渡される
//   return { props: { posts } }
// }

// 生成後10秒以降のアクセスは再生成試行
// export async function getStaticProps({ params }) {
//   const res = await fetch(`https://.../posts/${ params.id }`);
//   const item = await res.json();
//   // 再生成試行間隔（10秒）
//   return { props: { item }, revalidate: 10 }
// }

// SSRのデータ取得関数
// export async function getServerSideProps(context) {
//   const res = await fetch(`https://...`);
//   const data = await fes.json();
//   return {
//     props: {}, // propsとしてpageコンポーネントに渡される
//   }
// }

// 旧初期データ取得方法
// function Page({ stars }) {
//   return <div>Next stars: { stars }</div>
// }

// Page.getInitialProps = async (ctx) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const json = await res.json();
//   return { stars: json.stargazers_count }
// }

export default function Page() {
  return <Template />;
}

// export default function Home() {
//   return (
//     <div className={ styles.container }>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico"/>
//       </Head>
//
//       <main className={ styles.main }>
//         <h1 className={ styles.title }>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>
//
//         <p className={ styles.description }>
//           Get started by editing{ ' ' }
//           <code className={ styles.code }>pages/index.js</code>
//         </p>
//
//         <div className={ styles.grid }>
//           <a href="https://nextjs.org/docs" className={ styles.card }>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>
//
//           <a href="https://nextjs.org/learn" className={ styles.card }>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>
//
//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={ styles.card }
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>
//
//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={ styles.card }
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//
//       <footer className={ styles.footer }>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{ ' ' }
//           <img src="/vercel.svg" alt="Vercel Logo" className={ styles.logo }/>
//         </a>
//       </footer>
//     </div>
//   )
// }
