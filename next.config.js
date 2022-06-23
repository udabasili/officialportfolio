const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
	images: {
		domains: ['images.unsplash.com', 'user-images.githubusercontent.com'],
	},
});
