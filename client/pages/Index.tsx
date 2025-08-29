import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="space-y-10">
      <section className="-mt-6 h-[50vh] mx-[-12px] sm:mx-0 rounded-none sm:rounded-lg bg-slate-100/50 dark:bg-slate-800/40 p-14 sm:p-16 text-center flex items-center justify-center">
        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F143921f1af8a425fb2590ed4b35f9a59%2Fd0a4164f46244493ab8e29799751546c?format=webp&width=200"
            alt="St. Xavier's logo"
            className="mx-auto mb-6 h-36 w-36 sm:h-40 sm:w-40 rounded-full object-contain"
          />
          <h1 className="text-[34px] sm:text-[40px] leading-tight font-semibold tracking-[-0.5px]">St. Xavier's</h1>
          <p className="text-base sm:text-lg text-muted-foreground">Higher Secondary School, Bettiah</p>
        </div>
      </section>

      <div className="mx-auto -mt-6 max-w-2xl rounded-lg bg-white p-8 text-center dark:bg-card">
        <h2 className="text-[20px] leading-7 font-extrabold tracking-[1px]">ABHIJEET RAO</h2>
        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
          <p>ID: 10220E6147</p>
          <p>Class: X-B, Roll No.: 01</p>
          <p>Admission No.: 107/2015</p>
        </div>
      </div>
    </div>
  );
}
