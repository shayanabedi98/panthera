export default function LayoutBlurredCircle() {
  return (
    <div className="">
      <div className="circle-one h-[850px] w-[850px] rounded-full blur-[140px] absolute top-[-100px] right-[1300px] z-[-1]"></div>
      <div className="circle-two h-[1000px] w-[1000px] rounded-full blur-[140px] bg-[#49478a] absolute top-[-500px] right-[430px] z-[-1]"></div>
      <div className="circle-three h-[850px] w-[850px] rounded-full blur-[140px] absolute top-[-100px] right-[-350px] z-[-1]"></div>
    </div>
  );
}
