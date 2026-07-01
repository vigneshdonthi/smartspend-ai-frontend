import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  createBudget,
  updateBudget,
} from "../../services/budgetService";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

import { Loader2 } from "lucide-react";

const budgetSchema = z.object({
  month: z.coerce.number().min(1).max(12),
  year: z.coerce.number().min(2020).max(2100),
  budget: z.coerce.number().positive(),
});

const MONTHS = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

function BudgetForm({
  open,
  setOpen,
  budget = null,
  refreshBudgets,
}) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      budget: "",
    },
  });

  const selectedMonth = watch("month");

  useEffect(() => {
    if (budget) {
      reset({
        month: budget.month,
        year: budget.year,
        budget: budget.budget,
      });
    } else {
      reset({
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        budget: "",
      });
    }
  }, [budget, reset]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      if (budget) {
        await updateBudget(budget.id, data);
      } else {
        await createBudget(data);
      }

      refreshBudgets();

      setOpen(false);

      reset({
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        budget: "",
      });

    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.detail ||
        error.response?.data?.error ||
        "Something went wrong."
      );

    } finally {
      setLoading(false);
    }
  };

    return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent className="sm:max-w-md">

        <DialogHeader>

          <DialogTitle className="text-2xl">

            {budget ? "Edit Budget" : "Add Budget"}

          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          <div>

            <Label>
              Month
            </Label>

            <Select
              value={String(selectedMonth)}
              onValueChange={(value) =>
                setValue("month", Number(value))
              }
            >

              <SelectTrigger>

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                {MONTHS.map((month) => (

                  <SelectItem
                    key={month.value}
                    value={String(month.value)}
                  >

                    {month.label}

                  </SelectItem>

                ))}

              </SelectContent>

            </Select>

            {errors.month && (

              <p className="text-red-500 text-sm mt-1">

                {errors.month.message}

              </p>

            )}

          </div>

          <div>

            <Label>
              Year
            </Label>

            <Input
              type="number"
              {...register("year")}
            />

            {errors.year && (

              <p className="text-red-500 text-sm mt-1">

                {errors.year.message}

              </p>

            )}

          </div>

          <div>

            <Label>
              Budget (₹)
            </Label>

            <Input
              type="number"
              step="0.01"
              placeholder="20000"
              {...register("budget")}
            />

            {errors.budget && (

              <p className="text-red-500 text-sm mt-1">

                {errors.budget.message}

              </p>

            )}

          </div>

          <div className="flex justify-end gap-3">

            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
            >

              {loading && (

                <Loader2 className="mr-2 h-4 w-4 animate-spin" />

              )}

              {budget
                ? "Update Budget"
                : "Add Budget"}

            </Button>

          </div>

        </form>

      </DialogContent>

    </Dialog>
  );
}

export default BudgetForm;