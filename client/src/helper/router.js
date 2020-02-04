import Home from "../page/Home";
import Users from "../page/Users";
import Statictics from "../page/Statisctics";

const router = {
  home: {
    path: "/",
    component: Home
  },
  stats: {
    path: "/users/:id",
    component: Statictics
  },
  users: {
    path: "/users",
    component: Users
  }
};
export default router;
