import React, { Fragment, Suspense } from "react";
import AppRouting from "./router/router";
import { MagnifyingGlass } from "react-loader-spinner";
import HomeNavbar from "./components/homeNavbar";

function App() {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="bg-opacity-100 bg-transparent fixed inset-0 min-h-screen flex justify-center items-center z-50">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </div>
        }
      >
        <AppRouting />
      </Suspense>
    </Fragment>
  );
}

export default App;
