import Home from "../page/Home";
import Users from "../page/Users";

const router = {
  home: {
    path: "/",
    component: Home
  },
  stats: {
    path: "/statistic"
    // component: Statistic
  },
  users: {
    path: "/users",
    component: Users
  }
};
export default router;
