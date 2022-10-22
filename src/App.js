import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Browser } from "@syncfusion/ej2/base";

const App = () => {
  const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3x1 p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fied sidebar dark:bg-secondary-dark-bg bg-white">
              SideBar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar </div>
          )}
          <div
            classname={`dark:bg-main-dark-bg min-h-screen w-full ${
              activeMenu ? "ml-72" : "ml-0"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="Ecommerce" />
              <Route path="/ecommerce" element="Ecommerce" />
              {/* Pages */}
              <Route path="/orders" element="Orders" />
              <Route path="/employees" element="Employees" />
              <Route path="/customer" element="Customers" />
              {/* Apps */}
              <Route path="/kanban" element="Kanban" />
              <Route path="/editors" element="Editor" />
              <Route path="/calender" element="Calender" />
              <Route path="/colorpicker" element="ColorPicker" />
              {/* Charts */}
              <Route path="/line" element="Line" />
              <Route path="/area" element="Area" />
              <Route path="/bar" element="Bar" />
              <Route path="/pie" element="Pie" />
              <Route path="/financial" element="Financial" />
              <Route path="/pyramid" element="Pyramid" />
              <Route path="/color-mapping" element="ColorMapping" />
              <Route path="/stacked" element="Stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
