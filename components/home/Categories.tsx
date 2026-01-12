import { fetcher } from "@/lib/coingecko.actions";
import DataTable from "../DataTable";
import Image from "next/image";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Categories = async () => {
    const categories = await fetcher<Category[]>("/coins/categories");

    const columns: DataTableColumn<Category>[] = [
        {
            header: "Category",
            cellClassName: "category-cell",
            cell: (category) => category.name,
        },
        {
            header: "Top Gainers",
            cellClassName: "top-gainers-cell",
            cell: (category) =>
                category.top_3_coins.map((coin) => (
                    <Image
                        src={coin}
                        alt={coin}
                        key={coin}
                        width={28}
                        height={28}
                    />
                )),
        },
        {
            header: "24h Change",
            cellClassName: "change-header-cell",
            cell: (category) => {
                const isPositive = category.market_cap_change_24h >= 0;

                return (
                    <span
                        className={cn(
                            isPositive ? "text-green-500" : "text-red-500"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            {category.market_cap_change_24h.toFixed(2)}%
                            {isPositive ? (
                                <TrendingUp width={16} height={16} />
                            ) : (
                                <TrendingDown width={16} height={16} />
                            )}
                        </div>
                    </span>
                );
            },
        },
        {
            header: "Market Cap",
            cellClassName: "market-cap-cell",
            cell: (category) =>
                `$${category.market_cap.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                })}`,
        },
        {
            header: "24h Volume",
            cellClassName: "volume-cell",
            cell: (category) =>
                `$${category.volume_24h.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                })}`,
        },
    ];
    return (
        <div id="categories" className="custom-scrollbar">
            <h4>Top Categories</h4>
            <DataTable
                columns={columns}
                data={categories?.slice(0, 10)}
                rowKey={(_, index) => index}
                tableClassName="mt-3"
            />
        </div>
    );
};

export default Categories;
