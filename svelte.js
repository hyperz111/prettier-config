import config from "./index.js";

export default {
	...config,
	plugins: ["prettier-plugin-svelte"],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
};
