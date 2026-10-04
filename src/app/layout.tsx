import type { Metadata, Viewport } from "next";
import { DirectionProvider } from "@/components/ui/direction";
import { modam } from "@/fonts";
import { AuthProvider } from "@/context/AuthProvider";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import ToastContainer from "@/components/toast/ToastContainer";
import { ToastProvider } from "@/context/ToastContext";
import "./globals.css";
import { ServiceWorkerRegistration } from "@/pwa/ServiceWorkerRegistration";

export const metadata: Metadata = {
  title: "بدو کادو",
  description: "وب سایت خرید کادو",
  applicationName: "بدو کادو",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "بدو کادو",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={cn(modam.variable)}>
      <body>
        <ServiceWorkerRegistration />
        <AuthProvider>
          <DirectionProvider direction="rtl">
            {/* <SidebarProvider> */}
            <div className="relative flex h-dvh w-full">
              <div className="h-full w-full overflow-auto hide-scrollbar">
                <ViewTransitions>
                  <ToastProvider>
                    {children}
                    <ToastContainer />
                  </ToastProvider>
                </ViewTransitions>
              </div>
            </div>
            {/* </SidebarProvider> */}
          </DirectionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
