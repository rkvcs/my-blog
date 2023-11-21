import { Head } from "$fresh/runtime.ts";
import { TopBar } from "../components/TopBar.tsx";

export default function Home() {
    return (
        <>
            <Head>
                <title>Blog RKVCS</title>
                <link rel="stylesheet" href="app.css"></link>
                <link rel="icon" type="image/x-icon" href="favicon.ico?v=2"></link>
            </Head>
            <TopBar></TopBar>
            <main>
                <div class="p-4 mx-auto max-w-screen-md">
                    <div class="box-content bg-white p-4 rounded-lg">
                        <h2 class="text-2xl">Post Title (test)</h2>
                        <p class="text-lg py-2">description ...</p>
                        <small class="text-gray-500 text-right block">11/21/2023</small>
                    </div>
                </div>
            </main>
        </>
    );
}
