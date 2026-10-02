/**
 * Layar: /[username]/[id] → sheet pilih varian
 * Kunci di registry: "variant-sheet"
 * Spot yang bisa disorot: beli
 */

import { VariantSheet } from "@/components/mockups/kit";

export default function BuyVariantSheetScreen() {
  return <VariantSheet cta="Beli Sekarang" spotId="beli" />;
}
