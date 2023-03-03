const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			caches: [],
			cachesToShow: [],
			userActive: null,
			currentUser: ""
		},

		actions: {
			getCaches: async () => {
				const response = await fetch(process.env.BACKEND_URL + "/api/cache");
				const data = await response.json();
				setStore({ caches: data.results })
			},

			getCachesToShow: async () => {
				const response = await fetch(process.env.BACKEND_URL + "/api/ToShowcache");
				const data = await response.json();
				setStore({ cachesToShow: data.results })
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
				console.log(data)
				if (response.ok) setStore({ userActive: true });
			},

			getCurrentUser: async () => {
				const response = await fetch(
					process.env.BACKEND_URL + "/api/current-user",
					{
						headers: {
							Authorization: "Bearer " + localStorage.getItem("token"),
						},
					}
				);
				const data = await response.json();
				console.log(data)
				if (response.ok) setStore({ currentUser: data });
			},

			getUpdateUser: async () => {
				const { currentUser } = getStore();
				const response = await fetch(process.env.BACKEND_URL + "/api/updateUser-user", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + localStorage.getItem("token"),
					},
					body: JSON.stringify({
						"email": currentUser.email,
						"name": currentUser.name,
						"country": currentUser.country,
						"city": currentUser.city,
						"date_of_birth": currentUser.date_of_birth,
						"password": currentUser.password

					}),
				});
				const data = await response.json();
				console.log(data);
				if (response.ok) setStore({ currentUser: data });
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
