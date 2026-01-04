import DataTable from "@/components/DataTable";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const columns: DataTableColumn<TrendingCoin>[] = [
    {
        header: "Name",
        cellClassName: "name-cell",
        cell: (coin) => {
            const item = coin.item;
            return (
                <Link href={`/coins/${item.id}`}>
                    <Image
                        src={item.large}
                        alt={item.name}
                        width={36}
                        height={36}
                    />
                    <p>{item.name} </p>
                </Link>
            );
        },
    },
    {
        header: "24 Hour Change",
        cellClassName: "name-cell",
        cell: (coin) => {
            const item = coin.item;
            const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
            return (
                <div
                    className={cn(
                        "price-change",
                        isTrendingUp ? "text-green-500" : "text-red-500"
                    )}
                >
                    {isTrendingUp ? (
                        <TrendingUp width={16} height={16} />
                    ) : (
                        <TrendingDown width={16} height={16} />
                    )}
                </div>
            );
        },
    },
    {
        header: "Price",
        cellClassName: "price-cell",
        cell: (coin) => coin.item.data.price,
    },
];

const Page = () => {
    return (
        <main className="main-container">
            <section className="home-grid">
                <div id="coin-overview">
                    <div className="header pt-2">
                        <Image
                            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                            alt="Bitcoin"
                            width={56}
                            height={56}
                        />
                        <div className="info">
                            <p>Bitcoin / BTC</p>
                            <h1>$ 89,113</h1>
                        </div>
                    </div>
                </div>
                <p>Trending Coins</p>
                <DataTable data={[]} columns={columns} />
            </section>

            <section className="w-full mt-7 space-y-4">
                <p>Categories</p>
            </section>
        </main>
    );
};

export default Page;
