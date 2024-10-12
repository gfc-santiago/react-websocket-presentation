import CollectionProvider from "../../hooks/collection-provider";
import ConfigProvider from "../../hooks/config-provider";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <CollectionProvider>
      <ConfigProvider>
        <Outlet />
      </ConfigProvider>
    </CollectionProvider>
  );
}
