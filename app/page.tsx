import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 w-full " >
      <div className="animate-text-pop-up-top text-center">
        <h1 className="text-3xl mb-3">About tarkov</h1>
        <div>
          <p>正式名称『Escape from Tarkov』</p>
          <p>ゲームシステムは現実世界をイメージされており、</p>
          <p>撃たれ方によって状態異常を伴い、死ねば装備ロストする</p>
          <p>他にはないハードコアFPSとなっている</p>
        </div>
        <Image 
          width={1904}
          height={852}
          src="/tarkov-logo.png"
          alt=""
          priority
          />
      </div>
    </main>
  );
}
