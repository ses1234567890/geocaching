const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userActive: null,
		},

		actions: {
			validateUser: async () => {
				const response = await fetch(
					"https://3001-ses123456789-geocaching-msv8zj2lcnl.ws-eu85.gitpod.io/api/user",
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
		},
	};
};

export default getState;
