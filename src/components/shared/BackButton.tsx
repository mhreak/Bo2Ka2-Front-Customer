import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      size={"icon-sm"}
      onClick={() => {
        router.back();
      }}
    >
      <ArrowRight />
    </Button>
  );
};

export default BackButton;
