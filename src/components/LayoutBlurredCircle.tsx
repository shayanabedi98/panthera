export default function LayoutBlurredCircle() {
  return (
    <div className="max-w-full relative">
      <div className="circle-one hidden lg:flex h-[50vw] w-[50vw] rounded-full blur-[140px] absolute top-[-10vw] left-[-20vw] z-[-1]"></div>
      <div className="circle-two hidden lg:flex h-[50vw] w-[50vw] rounded-full blur-[140px] absolute left-[24vw] top-[-25vw] z-[-1]"></div>
      <div className="circle-three hidden lg:flex h-[50vw] w-[50vw] rounded-full blur-[140px] absolute top-[-10vw] right-[-20vw] z-[-1]"></div>
    </div>
  );
}
