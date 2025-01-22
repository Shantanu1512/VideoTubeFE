import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   postApi("http://localhost:5000/api/v1/users/login", {
  //     email: "shantanu12@gmail.com",
  //     password: "12345678",
  //   });
  // }, []);

  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  );
}

export default App;
