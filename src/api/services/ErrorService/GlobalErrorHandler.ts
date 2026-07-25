import { toast } from "sonner";
import ApiError from "./ApiError";

export class GlobalErrorHandler {
  static handle(error: ApiError) {
    error.type !== "NOT_FOUND_404" &&
      error.type !== "SERVER_500" &&
      toast.error(error.message);
  }
}
