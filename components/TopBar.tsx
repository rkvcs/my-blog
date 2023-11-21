import { JSX } from "preact";


export function TopBar() {
  return (
    <div class="bg-violet-800 text-white px-6 py-6">
      <div class="mx-auto max-w-3xl font-bold font-mono text-2xl flex justify-between">
        <a href="/">RKVCS</a>
        <a href="https://github.com/rkvcs" target="_blank" alt="Github"><img src="./github-icon.svg" alt="github" class="w-8"/></a>
      </div>
    </div>
  );
}