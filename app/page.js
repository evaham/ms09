// page number 1

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col p-2">
        <div className="">진행중 공동구매</div>
        <div className="flex flex-col gap-4">
          <Link className="flex gap-4 flex-col p-4 rounded-lg bg-white shadow dark:bg-slate-700" href="/group-list">
            <div>
              <span>D-7</span><span>01.16(목)~01.23(목)</span>
            </div>
            <div>
              <span>설 맞이 선물 세트 기획전</span>
            </div>
            <div>
              <img src="/img/1.jpg" alt="설 맞이 선물 세트 기획전" width={100} height={100} className="rounded-lg" />
            </div>
          </Link>
          <Link className="flex gap-4 flex-col border border-" href="/group-list">
            <div>
              <span>D-7</span><span>01.16(목)~01.23(목)</span>
            </div>
            <div>
              <span>설 맞이 선물 세트 기획전</span>
            </div>
            <div>
              
            </div>
          </Link>
        </div>
        <div>진행예정 공동구매</div>
        <div>
          <Link className="flex gap-4 flex-col border border-" href="/group-list">
            <div>
              <span>D-7</span><span>01.16(목)~01.23(목)</span>
            </div>
            <div>
              <span>설 맞이 선물 세트 기획전</span>
            </div>
            <div>
              
            </div>
          </Link>
        </div>
      </main>
      <div className="fixed right-0 bottom-0">맨위로</div>
      <div className="fixed top-20 right-4 left-4 flex flex-col bg-slate-50 hidden">
        <span>매장정보</span><div>닫기</div>
        <div className="border bg-amber-50">
          <span>매장명</span><span>아이콘</span>
        </div>
      </div>
    </div>
  );
}
