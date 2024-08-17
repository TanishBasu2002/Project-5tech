import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { SidebarItems } from "../../../utils/constants";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] rounded-none p-4 shadow-xl shadow-blue-gray-900/5 hidden lg:block">
      <List>
        {SidebarItems.map((item, index) => (
          <Link key={index} to={item.link}>
            <ListItem>
              <ListItemPrefix>
                <item.icon className="h-5 w-5" />
              </ListItemPrefix>
              {item.label}
            </ListItem>
          </Link>
        ))}
      </List>
    </Card>
  );
}
