"use client";

import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="w-full max-w-md text-center">
        <div className="rounded-2xl border bg-background p-8 shadow-sm">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h.01" />
              <path d="M8.5 16.5a5 5 0 0 1 7 0" />
              <path d="M5 13a10 10 0 0 1 14 0" />
              <path d="M2 9.5a15 15 0 0 1 20 0" />
              <line x1="2" x2="22" y1="2" y2="22" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold">اتصال اینترنت برقرار نیست</h1>

          <p className="mt-3 text-muted-foreground">
            به نظر می‌رسد اتصال شما به اینترنت قطع شده است. بعد از برقراری
            اتصال، دوباره تلاش کنید.
          </p>

          <Button
            variant={"gradient"}
            onClick={() => window.location.reload()}
            className="mt-6"
          >
            تلاش مجدد
          </Button>
        </div>
      </section>
    </main>
  );
}
