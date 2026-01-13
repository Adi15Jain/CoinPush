"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchModal } from "./SearchModal";

const Header = ({ trendingCoins }: HeaderProps) => {
    const pathName = usePathname();

    return (
        <header>
            <div className="main-container inner">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="CoinPush Logo"
                        width={132}
                        height={40}
                    />
                </Link>
                <nav>
                    <Link
                        href="/"
                        className={cn("nav-link", {
                            "is-active": pathName === "/",
                            "is-home": true,
                        })}
                    >
                        Home
                    </Link>
                    <SearchModal initialTrendingCoins={trendingCoins} />
                    <Link
                        href="/coins"
                        className={cn("nav-link", {
                            "is-active": pathName === "/coins",
                        })}
                    >
                        All Coins
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
