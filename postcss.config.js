let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('@tailwindcss/postcss')(tailwindConfig);

module.exports = {
	plugins: [tailwind],
};
