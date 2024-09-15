import presentation from "../../data/presentation";
import CollectionProvider from "../../hooks/collection-provider";
import ConfigProvider from "../../hooks/config-provider";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <ConfigProvider>
      <CollectionProvider presentation={presentation}>
        <Outlet />
      </CollectionProvider>
    </ConfigProvider>
  );
}
