import { fetcher } from "@/coingecko.actions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { CoinOverviewFallback } from "./Fallback";

const CoinOverview = async () => {
    let coin;

    try {
        coin = await fetcher<CoinDetailsData>("/coins/bitcoin", {
            dex_pair_format: "symbol",
        });
    } catch (error) {
        console.error("Error fetching coin overview:", error);
        return <CoinOverviewFallback />;
    }

    return (
        <div id="coin-overview">
            <div className="header pt-2">
                <Image
                    src={coin.image.large}
                    alt={coin.name}
                    width={56}
                    height={56}
                />
                <div className="info">
                    <p>
                        {coin.name} / {coin.symbol.toUpperCase()}
                    </p>
                    <h1>
                        {formatCurrency({
                            value: coin.market_data.current_price.inr,
                            currency: "INR",
                        })}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default CoinOverview;
