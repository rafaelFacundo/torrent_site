import { createBrowserRouter } from "react-router-dom";
import Home from "src/screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
