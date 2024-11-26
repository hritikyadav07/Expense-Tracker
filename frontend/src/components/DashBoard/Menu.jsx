import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
//   const location = useLocation(); // Get the current route

  // Menu items with their paths
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Transaction", path: "/dashboard/transactions" },
    { name: "Analytics", path: "/dashboard/analytics" },
    { name: "Investments", path: "/dashboard/investments" },
    { name: "Expenses", path: "/dashboard/expenses" },
    { name: "Savings", path: "/dashboard/savings" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="col-span-2  h-full p-4 my-4">
      {/* <h3 className="text-xl font-bold p-4 my-10">Dashboard</h3> */}
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className="mb-4">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block p-2 rounded font-bold  ${
                  isActive ? "bg-yellow-600 text-white" : "hover:text-blue-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
