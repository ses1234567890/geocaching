const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			caches: [],
		},
		actions: {
			getCaches: async () => {
				const response = await fetch(process.env.BACKEND_URL + "/api/cache");
				const data = await response.json();
				console.log(data.results)
				setStore({ caches: data.results })
			}
		}
	};
};

export default getState;
