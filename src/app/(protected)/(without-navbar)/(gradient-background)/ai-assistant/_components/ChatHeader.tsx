import { ListSortDescending } from "lucide-react";
import BackButton from "@/components/shared/BackButton";
import { Button } from "@/components/ui/button";

const ChatHeader = () => {
  return (
    <div className="flex-between">
        <BackButton />
        <div className="flex-1"></div>
        <Button variant={"outline"} size={"icon-lg"}>
          <ListSortDescending direction={"right"} />
        </Button>
      </div>
  )
}

export default ChatHeader