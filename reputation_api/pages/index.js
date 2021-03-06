import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-4xl font-extrabold">Aura Reputation</h1>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://youtu.be/GaWE33EJFBg?t=3946"
          className="text-red-400 p-1 mr-2 underline"
        >
          {"Hackathon Finale Presentation"}
        </a>
        <div className="py-8 md:py-12 flex flex-wrap">
          <p className="text-gray-400 mr-2">{"Connect with us on Twitter "}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/alamaslabs"
            className="rounded border border-blue-400 text-blue-400 p-1 mr-2"
          >
            {"@AlamasLabs"}
          </a>
        </div>
        <div
          className="max-w-2xl"
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            paddingTop: "22.7571%",
            paddingBottom: "48px",
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              border: "none",
              padding: "0",
              margin: "0",
            }}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE3TZ9-y3A&#x2F;view?embed"
            allowFullScreen="allowfullscreen"
            allow="fullscreen"
          ></iframe>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
