# CoinPush 🚀

A modern cryptocurrency tracking and analytics platform built with Next.js, CoinGecko API, and real-time market insights.

Getting Started

First, install dependencies and run the development server:

npm install
npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Open your browser and navigate to:

http://localhost:3000

Project Overview

CoinPush is a feature-rich cryptocurrency tracking and analytics application that provides real-time and historical market data with a clean, modern UI.

Key Features

📊 Real-time and historical price data

🕯️ Interactive candlestick charts

🔍 Command palette search (Cmd + K / Ctrl + K)

🔁 Live price updates via WebSockets

📈 Market metrics: market cap, volume, price changes

🌗 Dark-themed, performance-optimized UI

⌨️ Fully keyboard-accessible interface

The application follows modern frontend best practices using:

Next.js App Router

Server Components + Client Components

SWR (Stale-While-Revalidate) for data fetching

shadcn/ui (cmdk) for command palette

Tailwind CSS for styling

CoinGecko REST & WebSocket APIs

Tech Stack

Framework: Next.js 14+

Language: TypeScript

Styling: Tailwind CSS

UI Components: shadcn/ui, lucide-react

Charts: lightweight-charts

Data Fetching: SWR

APIs: CoinGecko REST API & WebSocket feeds

Architecture Highlights

Server-side data fetching for SEO-friendly pages

Client-side SWR with caching and race-condition handling

Debounced search to prevent API rate-limit issues

Modular, scalable component structure

Strong typing using shared TypeScript interfaces

Development Notes

Coin search uses debounced SWR queries to avoid rate limits

Search modal opens using Cmd + K / Ctrl + K

Trending coins are shown when the search input is idle

Currency formatting supports USD and INR

Fully responsive layout with consistent design tokens

About the Developer

Adi Jain
Frontend Developer | AI & ML Enthusiast

🎓 B.Tech CSE (AI, ML, DL)

💻 Strong focus on React, Next.js, UI/UX, and data-driven applications

🧠 Interested in scalable systems, real-time apps, and clean architecture

Portfolio: https://adijain-portfolio.vercel.app

GitHub: https://github.com/Adi15Jain

Learn More

Next.js Documentation

Next.js App Router

SWR Documentation

CoinGecko API Documentation
