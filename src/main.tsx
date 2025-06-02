import { createRoot } from "react-dom/client";
import "./index.css";

import { ConfigProvider, App as AndtApp } from "antd";
import { RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import { router } from "./app/router/Routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./app/router/providers/QueryClient";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider>
    <AndtApp>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AndtApp>
  </ConfigProvider>
);
