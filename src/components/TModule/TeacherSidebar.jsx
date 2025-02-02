import {Link} from 'react-router-dom';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  DocumentTextIcon
 
} from "@heroicons/react/24/solid";

export default function TeacherSidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 hidden sm:block">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Teacher
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to={'/t/dashboard'}>Dashboard</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <DocumentTextIcon className="h-5 w-5" />
          </ListItemPrefix>
         <Link to={'/t/general'}>General</Link>
        </ListItem>
      </List>
    </Card>
  );
}
