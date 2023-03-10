const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			caches: [],
			userActive: null,
		},

		actions: {
			getCaches: async () => {
				const response = await fetch(process.env.BACKEND_URL + "/api/cache");
				const data = await response.json();
				console.log(data.results)
				setStore({ caches: data.results })
			},
      
			validateUser: async () => {
				const response = await fetch(
					process.env.BACKEND_URL + "/api/user",
					{
						headers: {
							Authorization: "Bearer " + localStorage.getItem("token"),
						},
					}
				);
				const data = await response.json();
				if (response.ok) setStore({ userActive: true });
			},
      
			logout: () => {
				try {
					localStorage.removeItem("token");
					setStore({ userActive: null });
					return true;
				} catch (e) {
					console.log(e);
					return false;
				}
			},
		}
	};
};

export default getState;
