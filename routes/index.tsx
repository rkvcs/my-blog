import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { TopBar } from "../components/TopBar.tsx";

export default function Home() {
  return (
    <>
		<Head>
			<title>Fresh App</title>
			<link rel="stylesheet" href="app.css"></link>
		</Head>
		<main>
			<TopBar></TopBar>
			<div class="p-4 mx-auto max-w-screen-md">
				<img src="/logo.svg" class="w-32 h-32" alt="the fresh logo: a sliced lemon dripping with juice" />
				<p class="my-6"> Welcome to `fresh`. Try updating this message in the ./routes/index.tsx file, and refresh. </p>
				<Counter start={3} />
			</div>
		</main>
    </>
  );
}
