import { Button } from "@/components/ui/button";

function ExpensePagination({
  page,
  setPage,
  pagination,
}) {
  const totalPages = Math.ceil(
    pagination.count / 10
  );

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-between mt-6">

      <p className="text-sm text-slate-500">

        Total Expenses: {pagination.count}

      </p>

      <div className="flex gap-2">

        <Button
          variant="outline"
          disabled={!pagination.previous}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>

        <div className="flex items-center px-4 font-semibold">

          {page} / {totalPages}

        </div>

        <Button
          variant="outline"
          disabled={!pagination.next}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>

      </div>

    </div>
  );
}

export default ExpensePagination;