import config from "./index.js";
import svelte from "prettier-plugin-svelte";

export default {
	...config,
	plugins: [svelte],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
};
