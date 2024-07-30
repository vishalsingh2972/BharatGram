import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;