import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  createExpense,
  updateExpense,
} from "../../services/expenseService";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";

import { Label } from "@/components/ui/label";

import { Loader2 } from "lucide-react";

const expenseSchema = z.object({
  item: z
    .string()
    .min(2, "Item must contain at least 2 characters"),

  category: z
    .string()
    .min(1, "Please select a category"),

  amount: z
    .coerce
    .number()
    .positive("Amount must be greater than zero"),

  date: z
    .string()
    .min(1, "Date is required"),

  notes: z
    .string()
    .optional(),

  is_recurring: z.boolean(),
});

const categories = [
  "Food",
  "Transport",
  "Entertainment",
  "Shopping",
  "Bills",
  "Groceries",
  "HealthCare",
  "Other",
];

function ExpenseForm({
  open,
  setOpen,
  expense = null,
  refreshExpenses,
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
    resolver: zodResolver(expenseSchema),

    defaultValues: {
      item: "",
      category: "",
      amount: "",
      date: "",
      notes: "",
      is_recurring: false,
    },
  });

  const recurring = watch("is_recurring");
  const selectedCategory = watch("category");

    useEffect(() => {
    if (expense) {
      reset({
        item: expense.item,
        category: expense.category,
        amount: expense.amount,
        date: expense.date,
        notes: expense.notes || "",
        is_recurring: expense.is_recurring,
      });
    } else {
      reset({
        item: "",
        category: "",
        amount: "",
        date: "",
        notes: "",
        is_recurring: false,
      });
    }
  }, [expense, reset]);

    const onSubmit = async (data) => {
    try {
      setLoading(true);

      if (expense) {
        await updateExpense(expense.id, data);
      } else {
        await createExpense(data);
      }

      refreshExpenses();

      setOpen(false);

      reset();

    } catch (error) {
      console.error(error);

      alert(
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

      <DialogContent className="sm:max-w-2xl">

        <DialogHeader>

          <DialogTitle className="text-2xl">

            {expense
              ? "Edit Expense"
              : "Add Expense"}

          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          <div className="grid grid-cols-2 gap-5">

            <div>

              <Label>
                Item
              </Label>

              <Input
                placeholder="Pizza"
                {...register("item")}
              />

              {errors.item && (

                <p className="text-red-500 text-sm mt-1">

                  {errors.item.message}

                </p>

              )}

            </div>

            <div>

              <Label>
                Amount (₹)
              </Label>

              <Input
                type="number"
                step="0.01"
                placeholder="250"
                {...register("amount")}
              />

              {errors.amount && (

                <p className="text-red-500 text-sm mt-1">

                  {errors.amount.message}

                </p>

              )}

            </div>

            <div>

              <Label>
                Date
              </Label>

              <Input
                type="date"
                {...register("date")}
              />

              {errors.date && (

                <p className="text-red-500 text-sm mt-1">

                  {errors.date.message}

                </p>

              )}

            </div>


            <div>

              <Label>
                Category
              </Label>

              <Select
                value={selectedCategory}
                onValueChange={(value) =>
                  setValue("category", value)
                }
              >

                <SelectTrigger>

                  <SelectValue placeholder="Select Category" />

                </SelectTrigger>

                <SelectContent>

                  {categories.map((category) => (

                    <SelectItem
                      key={category}
                      value={category}
                    >

                      {category}

                    </SelectItem>

                  ))}

                </SelectContent>

              </Select>

              {errors.category && (

                <p className="text-red-500 text-sm mt-1">

                  {errors.category.message}

                </p>

              )}

            </div>

          </div>

          <div>

            <Label>
              Notes
            </Label>

            <Textarea
              rows={4}
              placeholder="Optional notes..."
              {...register("notes")}
            />

          </div>

          <div className="flex items-center justify-between border rounded-lg p-4">

            <Label>
              Recurring Expense
            </Label>

            <Switch
              checked={recurring}
              onCheckedChange={(checked) =>
                setValue(
                  "is_recurring",
                  checked
                )
              }
            />

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

              {expense
                ? "Update Expense"
                : "Add Expense"}

            </Button>

          </div>

        </form>

      </DialogContent>

    </Dialog>
  );
}

export default ExpenseForm;