export const state = () => ({
  breadCrumb_TitleBar: [],
  metaUser: false,
  isAdmin: false,
  storeCart: [],
});

export const mutations = {
  changeTitleBar(state, route) {
    const formattedResults = [];
    const cleanedRouteArray = route.split("/").filter((routePath) => routePath);
    const createObjectFormatted = cleanedRouteArray.forEach(
      ([firstLetter, ...rest], index) => {
        const firstCapitalizedName =
          `${firstLetter}`.toUpperCase() + rest.join("");

        const cleanedName = firstCapitalizedName
          .split("")
          .map((char) => (char == "-" ? " " : char))
          .join("");

        const capitalizedEveryWord = cleanedName
          .split(" ")
          .map(([first, ...rest]) => first.toUpperCase() + rest.join(""))
          .join(" ");

        formattedResults.push({
          text: capitalizedEveryWord,
          disabled: index == cleanedRouteArray.length - 1,
          href:
            formattedResults
              .map((route, index) =>
                index == formattedResults.length - 1 ? route.href : ""
              )
              .filter((path) => path) + `/${firstLetter + rest.join("")}`,
        });
      }
    );

    formattedResults.unshift({
      text: "Home",
      disabled: false,
      href: "/",
    });

    state.breadCrumb_TitleBar = formattedResults;
  },
  registerUser(state, message) {
    state.metaUser = message;
    // if (data?.adminId) {
    //   state.isAdmin = true;
    // } else {
    //   state.isAdmin = false;
    // }
  },
  addItemToCart(item) {
    state.storeCart.push(item);
  },
};

export const getters = {
  isLogged: (state) => state.metaUser,
};
