import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import Image from "next/image";

const EmptyChat = () => {
  return (
          <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <Image
              src="/images/orb-symbol.png"
              alt="دستیار هوشمند"
              width={88}
              height={88}
              className="object-contain"
            />
          </EmptyMedia>
          <EmptyTitle className="font-bold">چطوری میتونم کمکت کنم؟</EmptyTitle>
        </EmptyHeader>
        <EmptyContent className="flex-col justify-center gap-2">
          <Button variant={"outline"} size={"sm"}>
            بهترین کادو برای روز مادر چیست؟
          </Button>
          <Button variant="outline" size={"sm"}>
            بهترین کادو برای روز پدر چیست؟
          </Button>
        </EmptyContent>
      </Empty>
  )
}

export default EmptyChat