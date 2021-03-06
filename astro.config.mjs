import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import solid from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), solid(), tailwind()]
});