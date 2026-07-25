import { toast } from "@/components/ui/toast";
import ApiError from "./ApiError";

export class GlobalErrorHandler {
  static handle(error: ApiError) {
    error.type !== "NOT_FOUND_404" &&
      error.type !== "SERVER_500" &&
      toast.add({ type: "error", description: error.message });
  }
}
