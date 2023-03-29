//

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AppTopics } from "../../app/data";
import { RxDashboard } from "react-icons/rx";
import Card from "@/app/components/Card";

export default function Topic() {
  const [data, setData] = useState() as any;
  // get the topic name from the url
  const router = useRouter();

  // multiple slugs are passed in the url as an array

  const { query } = router;

  const findInfo = (slugs: Array<string>, data: Array<any>): any => {
    let result = data.find((item) => item.slug === slugs[0]);
    if (result && result.children && slugs.length > 1) {
      return findInfo(slugs.slice(1), result.children);
    }
    return result;
  };

  useEffect(() => {
    // console.log("slugs" + slug);
    if (query.slug) {
      let data = findInfo(query.slug as Array<string>, AppTopics);
      console.log(data);
      setData(data);
    }
  }, [query.slug]);

  return (
    <div className="bg-gradient-to-r h-full w-full from-[#FF9A8B] via-[#F0C1F1] to-[#FF9A8B]  ">
      <div className="w-full p-3 flex text-slate-400">
        <RxDashboard className="text-lg mt-[3px] mr-2" />
        {data?.path?.split("/").map((item: string, index: number) => {
          return (
            <div key={index} className="inline-block">
              <h1 className="inline-block">{item}</h1>
              <h1 className="inline-block">/</h1>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap justify-center">
        {data?.children?.map((item: any , index : any) => {
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
