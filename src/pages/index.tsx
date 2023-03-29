//

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AppTopics } from "../app/data";
import { RxDashboard } from "react-icons/rx";
import Card from "@/app/components/Card";

export default function Home() {
  
  return (
    <div className="bg-gradient-to-r pt-16 h-full min-h-screen w-full from-[#FF9A8B] via-[#F0C1F1] to-[#FF9A8B] ">
      <div className="w-full grid pt-10 px-4 place-content-center">
        <h1 className="h-20  uppercase text-4xl font-bold text-[#690061]">
          Welcome to the KIDNAI !
        </h1>
        <p className="text-[#690061]  pt-4">How can i be of assistance to you today?</p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center">
        {AppTopics?.map((item: any, index: any) => {
          return (
            <div className="flex flex-wrap  " key={index}>
              <Card
                name={item.name}
                image={item.image}
                color={item.color}
                link={item.children ? item.path : null}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
