import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toPersianDigits } from "@/utils/numberConversions";
import { APIMetaData } from "@/types/api/commonApiTypes";

export interface AppPaginationProps {
  /** متادیتای صفحه‌بندی که از والد دریافت می‌شود */
  paginationMeta: APIMetaData | null | undefined;
  /** کال بک برای تغییر صفحه */
  onPageChanged: (page: number) => void;
  /** کال بک برای تغییر تعداد ردیف در هر صفحه */
  onPageSizeChanged?: (pageSize: number) => void;
  /** گزینه‌های قابل انتخاب برای تعداد ردیف در هر صفحه */
  pageSizeOptions?: number[];
  /** نمایش انتخابگر تعداد ردیف در هر صفحه */
  showPageSizeSelector?: boolean;
  /** تعداد صفحات نمایش داده شده در اطراف صفحه فعلی (پیش‌فرض: 1) */
  siblingCount?: number;
  /** متن دکمه قبلی */
  previousText?: string;
  /** متن دکمه بعدی */
  nextText?: string;
  /** متن برچسب تعداد ردیف */
  pageSizeLabel?: string;
  /** کلاس اضافی برای کانتینر اصلی */
  className?: string;
}

/** ساختار داخلی مورد نیاز کامپوننت */
interface NormalizedMeta {
  currentPage: number;
  totalCount: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
  pageSize: number;
}

/** مقادیر پیش‌فرض در صورت عدم وجود متادیتا */
const DEFAULT_META: NormalizedMeta = {
  currentPage: 1,
  totalCount: 20,
  totalPages: 1,
  hasPrevious: false,
  hasNext: false,
  pageSize: 20,
};

/** تبدیل APIMetaData به ساختار داخلی کامپوننت */
const normalizeMeta = (
  meta: APIMetaData | null | undefined,
): NormalizedMeta => {
  if (!meta) return DEFAULT_META;

  return {
    currentPage: meta.page ?? 1,
    totalCount: meta.totalCount ?? 20,
    totalPages: meta.totalPages ?? 1,
    hasPrevious: meta.hasPrevious ?? false,
    hasNext: meta.hasNext ?? false,
    pageSize: meta.pageSize ?? 20,
  };
};

const AppPagination: React.FC<AppPaginationProps> = ({
  paginationMeta,
  onPageChanged,
  onPageSizeChanged,
  pageSizeOptions = [10, 20, 50, 100],
  showPageSizeSelector = true,
  siblingCount = 1,
  previousText = "قبلی",
  nextText = "بعدی",
  pageSizeLabel = "تعداد ردیف‌ها در هر صفحه",
  className = "",
}) => {
  const meta = normalizeMeta(paginationMeta);

  const { currentPage, totalPages, hasPrevious, hasNext, totalCount } = meta;
  const currentPageSize = paginationMeta?.pageSize ?? 20;

  // محاسبه شماره صفحات برای نمایش با نقطه‌چین
  const getPageNumbers = (): (number | "ellipsis-start" | "ellipsis-end")[] => {
    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftEllipsis = leftSiblingIndex > 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // حالت ۱: فقط نقطه‌چین راست
    if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, "ellipsis-end", lastPageIndex];
    }

    // حالت ۲: فقط نقطه‌چین چپ
    if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1,
      );
      return [firstPageIndex, "ellipsis-start", ...rightRange];
    }

    // حالت ۳: هر دو نقطه‌چین
    if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i,
      );
      return [
        firstPageIndex,
        "ellipsis-start",
        ...middleRange,
        "ellipsis-end",
        lastPageIndex,
      ];
    }

    return [];
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    if (page < 1 || page > totalPages) return;
    onPageChanged(page);
  };

  const handlePageSizeChange = (value: string | null) => {
    const newPageSize = Number(value);
    onPageSizeChanged?.(newPageSize);
  };

  return (
    <div
      className={`mt-10 mb-5 grid grid-cols-2 items-center gap-4 md:grid-cols-[1fr_auto_1fr] ${className}`}
    >
      {/* تعداد ردیف در هر صفحه */}
      {showPageSizeSelector ? (
        <div className="flex items-center gap-2 justify-self-start">
          <p className="text-xs font-medium text-muted-foreground">
            {pageSizeLabel}
          </p>

          <Select
            value={`${currentPageSize}`}
            onValueChange={handlePageSizeChange}
          >
            <SelectTrigger className="h-8 w-17.5" size="sm">
              <SelectValue placeholder={toPersianDigits(currentPageSize)}>
                {toPersianDigits(currentPageSize)}
              </SelectValue>
            </SelectTrigger>

            <SelectContent side="top">
              {pageSizeOptions.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {toPersianDigits(pageSize)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        // در دسکتاپ جای ستون اول را حفظ می‌کنیم
        <div />
      )}

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="col-span-2 flex justify-center md:col-span-1 md:col-start-2">
          <Pagination className="w-auto m-0">
            <PaginationContent className="gap-1">
              {/* صفحه قبلی */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();

                    if (!hasPrevious) return;

                    handlePageChange(currentPage - 1);
                  }}
                  className={
                    !hasPrevious
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                  text={previousText}
                />
              </PaginationItem>

              {/* شماره صفحات */}
              {getPageNumbers().map((page, index) => {
                if (page === "ellipsis-start" || page === "ellipsis-end") {
                  return (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }

                const pageNum = page as number;

                return (
                  <PaginationItem key={`page-${pageNum}`}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === pageNum}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(pageNum);
                      }}
                      className="cursor-pointer"
                    >
                      {toPersianDigits(pageNum)}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {/* صفحه بعدی */}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();

                    if (!hasNext) return;

                    handlePageChange(currentPage + 1);
                  }}
                  className={
                    !hasNext
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                  text={nextText}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* تعداد کل محصولات */}
      {totalCount > 0 ? (
        <div className="flex items-center gap-2 justify-self-start md:justify-self-end text-sm">
          <span className="text-muted-foreground">کل محصولات:</span>

          <span>{toPersianDigits(totalCount)}</span>
        </div>
      ) : (
        // در دسکتاپ جای ستون سوم را حفظ می‌کنیم
        <div />
      )}
    </div>
  );
};

export default AppPagination;
