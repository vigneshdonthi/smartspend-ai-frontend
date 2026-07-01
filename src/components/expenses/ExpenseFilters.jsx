import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

function ExpenseFilters({
  category,
  setCategory,
  ordering,
  setOrdering,
}) {
  const clearFilters = () => {
    setCategory("");
    setOrdering("-date");
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6">

      <div className="w-full md:w-60">

        <Select
          value={category || "all"}
          onValueChange={(value) =>
            setCategory(value === "all" ? "" : value)
          }
        >

          <SelectTrigger>

            <SelectValue placeholder="Category" />

          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Categories
            </SelectItem>

            <SelectItem value="Food">
              Food
            </SelectItem>

            <SelectItem value="Travel">
              Travel
            </SelectItem>

            <SelectItem value="Shopping">
              Shopping
            </SelectItem>

            <SelectItem value="Bills">
              Bills
            </SelectItem>

            <SelectItem value="Entertainment">
              Entertainment
            </SelectItem>

            <SelectItem value="Health">
              Health
            </SelectItem>

            <SelectItem value="Education">
              Education
            </SelectItem>

            <SelectItem value="Other">
              Other
            </SelectItem>

          </SelectContent>

        </Select>

      </div>

      <div className="w-full md:w-60">

        <Select
          value={ordering}
          onValueChange={setOrdering}
        >

          <SelectTrigger>

            <SelectValue />

          </SelectTrigger>

          <SelectContent>

            <SelectItem value="-date">
              Newest First
            </SelectItem>

            <SelectItem value="date">
              Oldest First
            </SelectItem>

            <SelectItem value="-amount">
              Highest Amount
            </SelectItem>

            <SelectItem value="amount">
              Lowest Amount
            </SelectItem>

            <SelectItem value="item">
              Item A-Z
            </SelectItem>

            <SelectItem value="-item">
              Item Z-A
            </SelectItem>

          </SelectContent>

        </Select>

      </div>

      <Button
        variant="outline"
        onClick={clearFilters}
      >
        Clear Filters
      </Button>

    </div>
  );
}

export default ExpenseFilters;