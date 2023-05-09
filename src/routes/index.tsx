import { NavigationContainer } from "@react-navigation/native";
import { TabsRoutes } from "./tad.routs";



export function Routes() {
  return (
    <NavigationContainer>
      <TabsRoutes/>
    </NavigationContainer>
  );
}