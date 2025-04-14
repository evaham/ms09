// page number 1

import Image from "next/image";
import Link from "next/link";
import TopButton from "./component/topButton";

export default function Home() {
  const data = require('/public/data/db.json')
  return (
    <div className="">
      <main className="flex flex-col p-4">
        <p className="my-2">진행중 공동구매</p>
        <ul className="flex flex-col gap-4 mb-4">
          {data.list.map((item, index) => (
            <li key={index}>
              <Link className="flex gap-4 flex-col w-full p-4 rounded-lg bg-white shadow" href={`/group-list/`}>
                <div className="flex text-sm">
                  <div className="flex items-center justify-center w-12 mr-2 rounded-full text-xs text-center bg-slate-500 text-white">D-7</div>
                  <div className="text-slate-500 line-clamp-1">{item.date}</div>
                </div>
                <div className="font-bold line-clamp-1">{item.name}</div>
                <div className="flex">
                  {item.imgGroup.slice(0, 5).map((imgSrc, index) => (
                    <div key={index} className="relative overflow-hidden flex items-center justify-center w-14 h-14 -mr-4 border border-slate-400 rounded-full bg-slate-200">
                      <Image src={imgSrc} alt={item.name} width={200} height={200} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {item.imgGroup.length > 5 && (
                    <div className="w-14 h-14 flex items-center justify-center bg-slate-300 rounded-full text-sm text-slate-600 z-10">
                      +{item.imgGroup.length - 5}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="my-2">진행예정 공동구매</p>
        <ul className="flex flex-col gap-4 mb-4">
          {data.list2.map((item, index) => (
            <li key={index}>
              <Link className="flex gap-4 flex-col w-full p-4 rounded-lg bg-white shadow" href={`/group-list/`}>
                <div className="flex text-sm">
                  <div className="w-14 mr-2 rounded-full text-center bg-slate-600 text-slate-50 dark:bg-slate-500">D-7</div>
                  <div className="text-slate-500 line-clamp-1">{item.date}</div>
                </div>
                <div className="font-bold line-clamp-1">{item.name}</div>
                <div className="flex">
                  {item.imgGroup.slice(0, 5).map((imgSrc, index) => (
                    <div key={index} className="relative overflow-hidden flex items-center justify-center w-14 h-14 -mr-4 border rounded-full bg-slate-200">
                      <Image src={imgSrc} alt={item.name} width={200} height={200} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {item.imgGroup.length > 5 && (
                    <div className="w-14 h-14 flex items-center justify-center bg-slate-300 rounded-full text-sm text-slate-600 z-10">
                      +{item.imgGroup.length - 5}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <TopButton isButton={false} />
    </div>
  );
}
