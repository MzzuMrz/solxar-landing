export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  logo: string;
  referralLink: string;
  referralCode: string;
  qrCode: string;
  category: string;
  platforms: string[];
  appStoreLink?: string;
  playStoreLink?: string;
}

const buildProduct = (productData: Omit<Product, "qrCode" | "image"> & { image?: string }): Product => ({
  image: "/placeholder.svg?height=120&width=120",
  ...productData,
  qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(productData.referralLink)}`,
});

export const productsData: Product[] = [
  buildProduct({
    id: 1,
    name: "Phantom",
    description: "La billetera más popular para Solana. Gestiona tus activos, stake SOL y explora dApps con facilidad.",
    logo: "/placeholder.svg?height=60&width=60",
    referralLink: "https://phantom.app/download?ref=solxar",
    referralCode: "solxar",
    category: "Wallet",
    platforms: ["iOS", "Android", "Chrome", "Brave", "Firefox"],
    appStoreLink: "https://apps.apple.com/app/phantom-solana-wallet/id1598432977",
    playStoreLink: "https://play.google.com/store/apps/details?id=app.phantom",
  }),
  buildProduct({
    id: 2,
    name: "Solflare",
    description: "Wallet nativa de Solana con soporte para staking, NFTs y conexión a dApps del ecosistema.",
    logo: "/placeholder.svg?height=60&width=60",
    referralLink: "https://solflare.com/?ref=solxar",
    referralCode: "solxar",
    category: "Wallet",
    platforms: ["iOS", "Android", "Chrome", "Brave"],
    appStoreLink: "https://apps.apple.com/app/solflare/id1580902717",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.solflare.mobile",
  }),
  buildProduct({
    id: 3,
    name: "Magic Eden",
    description: "El marketplace NFT líder en Solana. Compra, vende y descubre colecciones únicas.",
    logo: "/placeholder.svg?height=60&width=60",
    referralLink: "https://magiceden.io/?ref=solxar",
    referralCode: "solxar",
    category: "NFT Marketplace",
    platforms: ["Web", "iOS", "Android"],
    appStoreLink: "https://apps.apple.com/app/magic-eden/id1602924580",
    playStoreLink: "https://play.google.com/store/apps/details?id=io.magiceden.android",
  }),
  buildProduct({
    id: 4,
    name: "Jupiter",
    description: "El mejor agregador de liquidez y DEX en Solana. Obtén las mejores tasas en tus swaps.",
    logo: "/placeholder.svg?height=60&width=60",
    referralLink: "https://jup.ag/?ref=solxar",
    referralCode: "solxar",
    category: "DeFi",
    platforms: ["Web"],
  }),
  buildProduct({
    id: 5,
    name: "Orca",
    description: "Exchange descentralizado con interfaz amigable para trading de tokens en Solana.",
    logo: "/placeholder.svg?height=60&width=60",
    referralLink: "https://orca.so/?ref=solxar",
    referralCode: "solxar",
    category: "DeFi",
    platforms: ["Web"],
  }),
  buildProduct({
    id: 6,
    name: "Backpack",
    description: "Wallet multi-cadena con soporte para xNFTs y aplicaciones nativas.",
    logo: "/placeholder.svg?height=60&width=60",
    referralLink: "https://backpack.app/?ref=solxar",
    referralCode: "solxar",
    category: "Wallet",
    platforms: ["Chrome", "Brave", "iOS", "Android"],
    appStoreLink: "https://apps.apple.com/app/backpack-wallet/id6444389395",
    playStoreLink: "https://play.google.com/store/apps/details?id=app.backpack.mobile",
  }),
  buildProduct({
    id: 7,
    name: "Kast",
    description: "Tarjeta Visa para hacer pagos con tus cripto en la vida real, para pagos sin fronteras.",
    logo: "/placeholder.svg?height=60&width=60",
    referralLink: "https://www.kast.xyz/?ref=solxar",
    referralCode: "solxar",
    category: "Pagos",
    platforms: ["Web", "iOS", "Android"],
    appStoreLink: "https://apps.apple.com/app/kast-crypto-card/id1617752708",
    playStoreLink: "https://play.google.com/store/apps/details?id=xyz.kast.app",
  }),
];