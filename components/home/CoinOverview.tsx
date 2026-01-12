import { fetcher } from "@/lib/coingecko.actions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { CoinOverviewFallback } from "./Fallback";
import CandlestickChart from "../CandlestickChart";

const CoinOverview = async () => {
    let coin;
    let coinOHLCData;

    try {
        coin = await fetcher<CoinDetailsData>(
            "/coins/bitcoin",
            {
                dex_pair_format: "symbol",
            },
            300
        );
        coinOHLCData = await fetcher<OHLCData[]>(
            `/coins/bitcoin/ohlc`,
            {
                vs_currency: "inr",
                days: 7,
            },
            300
        );
    } catch (error) {
        console.error("Error fetching coin overview:", error);
        return <CoinOverviewFallback />;
    }

    return (
        <div id="coin-overview">
            <CandlestickChart data={coinOHLCData} coinId="bitcoin">
                <div className="header pt-3 pl-2">
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
            </CandlestickChart>
        </div>
    );
};

export default CoinOverview;
