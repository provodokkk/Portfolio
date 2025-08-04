import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <HomePage />
      </>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollToTop />
        <AboutPage />
      </>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/project/:projectId",
    element: (
      <>
        <ScrollToTop />
        <ProjectPage />
      </>
    ),
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;