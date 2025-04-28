import { createRoot } from "react-dom/client";
import "./index.css";

import { ConfigProvider, App as AndtApp } from "antd";
import { RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import { router } from "./app/router/Routes";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider>
    <AndtApp>
      <RouterProvider router={router} />
    </AndtApp>
  </ConfigProvider>
);
