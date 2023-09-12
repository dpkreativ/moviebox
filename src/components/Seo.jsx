import Head from "next/head";

export default function Seo({ title = "" }) {
  return (
    <Head>
      <title>MovieBox - {title}</title>
      {/* Add meta tags and favicon here */}
    </Head>
  );
}
