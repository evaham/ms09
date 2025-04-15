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
        <ul className="flex flex-col gap-2 mb-4">
          {data.list.map((item, index) => (
            <li key={index}>
              <Link className="relative flex gap-4 flex-col w-full p-4 rounded-lg bg-white shadow" href={`/group-list/`}>
                <div className="flex text-sm">
                  <div className="flex items-center justify-center w-12 mr-2 rounded-full text-xs text-center bg-teal-500 text-white">D-7</div>
                  <div className="text-slate-500 line-clamp-1">{item.date}</div>
                </div>
                <div className="font-bold line-clamp-1">{item.name}</div>
                <div className="flex">
                  {item.imgGroup.slice(0, 5).map((imgSrc, index) => (
                    <div key={index} className="relative overflow-hidden flex items-center justify-center w-14 h-14 -mr-4 border border-slate-500 rounded-full bg-slate-200">
                      <Image src={imgSrc} alt={item.name} width={200} height={200} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {item.imgGroup.length > 5 && (
                    <div className="w-14 h-14 flex items-center justify-center bg-slate-600 rounded-full text-white text-lg z-10">
                      +{item.imgGroup.length - 5}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="my-2">진행예정 공동구매</p>
        <ul className="flex flex-col gap-2 mb-4">
          {data.list2.map((item, index) => (
            <li key={index}>
              <Link className="relative overflow-hidden flex gap-4 flex-col w-full p-4 rounded-lg bg-white shadow" href={`/group-list/`}>
                <div className="flex text-sm">
                  <div className="w-14 mr-2 rounded-full text-center bg-teal-500 text-white">D-7</div>
                  <div className="text-slate-500 line-clamp-1">{item.date}</div>
                </div>
                <div className="font-bold line-clamp-1">{item.name}</div>
                <div className="flex">
                  {item.imgGroup.slice(0, 5).map((imgSrc, index) => (
                    <div key={index} className="relative overflow-hidden flex items-center justify-center w-14 h-14 -mr-4 border border-slate-500 rounded-full bg-slate-200">
                      <Image src={imgSrc} alt={item.name} width={200} height={200} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {item.imgGroup.length > 5 && (
                    <div className="w-14 h-14 flex items-center justify-center bg-slate-600 rounded-full text-white text-lg z-10">
                      +{item.imgGroup.length - 5}
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-xl text-white z-10">공구예정 Coming Soon</div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center justify-center w-full h-48 p-4 bg-teal-700/10 rounded-lg z-30">
          <p className="font-bold text-slate-600">현재 진행중인 공동구매가 없습니다.</p>
        </div>
      </main>

      <TopButton isButton={false} />
    </div>
  );
}
