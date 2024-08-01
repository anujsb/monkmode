import React from "react";
import Sidebar from "@/components/Sidebar";
const page = () => {
  return (
    <main className="flex ">
      <Sidebar />
      <div className=" p-20  flex flex-col  bg-background ">
        
        <div className="text-center m-10 px-24">
          <h1 className="text-4xl">Habit Log</h1>
        </div>
        <div className="grid grid-flow-row gap-4 justify-center ">
          <div className="grid grid-flow-col gap-4 justify-center ">
            <div className=" p-4 rounded-xl bg-primary min-w-80">
              <div className="flex items-center justify-between mt-2">
                <h1 className="text-lg ">task</h1>
                <div>tick</div>
              </div>
              <p className="text-dark-grey mt-1">heatmap</p>
            </div>
            <div className=" p-4 rounded-xl bg-primary min-w-80">
              <div className="flex items-center justify-between mt-2">
                <h1 className="text-lg ">task</h1>
                <div>tick</div>
              </div>
              <p className="text-dark-grey mt-1">heatmap</p>
            </div>
            <div className=" p-4 rounded-xl bg-primary min-w-80">
              <div className="flex items-center justify-between mt-2">
                <h1 className="text-lg ">task</h1>
                <div>tick</div>
              </div>
              <p className="text-dark-grey mt-1">heatmap</p>
            </div>
          </div>
          <div className="grid grid-flow-col gap-4 justify-center items-center">
            <div className=" p-4 rounded-xl bg-primary min-w-80">
              <div className="flex items-center justify-between mt-2">
                <h1 className="text-lg ">task</h1>
                <div>tick</div>
              </div>
              <p className="text-dark-grey mt-1">heatmap</p>
            </div>
            <div className=" p-4 rounded-xl bg-primary min-w-80">
              <div className="flex items-center justify-between mt-2">
                <h1 className="text-lg ">task</h1>
                <div>tick</div>
              </div>
              <p className="text-dark-grey mt-1">heatmap</p>
            </div>
            <div className=" p-4 rounded-xl bg-primary min-w-80">
              <div className="flex items-center justify-between mt-2">
                <h1 className="text-lg ">task</h1>
                <div>tick</div>
              </div>
              <p className="text-dark-grey mt-1">heatmap</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
