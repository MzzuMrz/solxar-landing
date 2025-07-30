
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download, Copy } from "lucide-react"
import type { Product } from "@/lib/products-data"
import { useLanguage } from "@/context/language-context" 

interface ProductCardProps {
  product: Product;
  isCopied: boolean;
  onCopy: () => void;
}

export function ProductCard({ product, isCopied, onCopy }: ProductCardProps) {
  const { t } = useLanguage();

  return (
    <div className="backdrop-blur-md bg-black/60 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:transform hover:scale-[1.02] h-full flex flex-col">
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-black/30 overflow-hidden flex items-center justify-center">
            <Image src={product.logo} alt={`${product.name} logo`} width={40} height={40} className="object-contain" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">{product.category}</span>
          </div>
        </div>

        <p className="text-white/70 mb-4 text-sm h-[60px]">{product.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.platforms.map((platform) => (
            <span key={platform} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">{platform}</span>
          ))}
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="backdrop-blur-md bg-black/60 p-2 rounded-lg border border-white/10">
              <img src={product.qrCode} alt={`${product.name} QR Code`} className="w-20 h-20" />
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild variant="solana" size="sm" className="flex items-center gap-2">
                <Link href={product.referralLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} />
                  {t("visit")}
                </Link>
              </Button>
              <div className="flex gap-2">
                {product.appStoreLink && (
                  <Button asChild variant="outline" size="sm" className="flex items-center gap-1 border-white/20 px-2">
                     <Link href={product.appStoreLink} target="_blank" rel="noopener noreferrer">
                        <Download size={12} /> iOS
                     </Link>
                  </Button>
                )}
                {product.playStoreLink && (
                   <Button asChild variant="outline" size="sm" className="flex items-center gap-1 border-white/20 px-2">
                     <Link href={product.playStoreLink} target="_blank" rel="noopener noreferrer">
                        <Download size={12} /> Android
                     </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-black/30 p-2 rounded-md">
            <span className="text-xs text-white/60">{t("referralCode")}</span>
            <div className="flex items-center gap-2">
              <code className="text-xs font-mono bg-black/20 px-2 py-1 rounded">{product.referralCode}</code>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={onCopy}>
                {isCopied ? <span className="text-xs text-solana-green">✓</span> : <Copy size={12} className="text-white/60" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}