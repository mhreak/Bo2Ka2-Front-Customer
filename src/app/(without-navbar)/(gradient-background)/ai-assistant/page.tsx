"use client";

import SendInput from "@/components/shared/inputs/SendInput";
import ChatHeader from "./_components/ChatHeader";
import ChatPage from "./_components/ChatPage";


const AIAssistant = () => {
  return (
    <div className="flex h-full flex-col justify-start">

      <ChatHeader />
        <div className="flex-1 min-h-0 py-4 ">
          <ChatPage />
        </div>
      <SendInput value="" onChange={() => { }} placeholder="دنبال چی هستی؟" />
    </div>
  )
}

export default AIAssistant
