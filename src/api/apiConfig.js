const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	apiKey: '51c06a3e85c51ab684eeb50c52a4df41',
	originalImage: imgPath => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: imgPath => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;