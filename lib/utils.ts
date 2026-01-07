import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type CurrencyCode = "USD" | "INR";

interface FormatCurrencyOptions {
    value: number | null | undefined;
    currency?: CurrencyCode;
    digits?: number;
    showSymbol?: boolean;
}

export function formatCurrency({
    value,
    currency = "USD",
    digits = 2,
    showSymbol = true,
}: FormatCurrencyOptions): string {
    if (value == null || Number.isNaN(value)) {
        if (!showSymbol) return "0.00";
        return currency === "INR" ? "₹0.00" : "$0.00";
    }

    const locale = currency === "INR" ? "en-IN" : "en-US";

    return value.toLocaleString(
        locale,
        showSymbol
            ? {
                  style: "currency",
                  currency,
                  minimumFractionDigits: digits,
                  maximumFractionDigits: digits,
              }
            : {
                  minimumFractionDigits: digits,
                  maximumFractionDigits: digits,
              }
    );
}

export function formatPercentage(change: number | null | undefined): string {
    if (change === null || change === undefined || isNaN(change)) {
        return "0.0%";
    }
    const formattedChange = change.toFixed(1);
    return `${formattedChange}%`;
}
