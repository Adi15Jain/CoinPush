import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type Currency = "USD" | "INR";

export function formatCurrency(
    value: number,
    currency: Currency,
    options?: {
        withSymbol?: boolean;
        maximumFractionDigits?: number;
    }
): string {
    const { withSymbol = false, maximumFractionDigits = 2 } = options || {};

    const formatter = new Intl.NumberFormat(
        currency === "INR" ? "en-IN" : "en-US",
        {
            style: withSymbol ? "currency" : "decimal",
            currency,
            maximumFractionDigits,
        }
    );

    return formatter.format(value);
}
