/**
 * Layar: /rewards/vouchers → sheet pilih varian
 * Kunci di registry: "voucher-variant"
 * Spot yang bisa disorot: gunakan-voucher
 */

import { VariantSheet } from "@/components/mockups/kit";

export default function VoucherVariantSheetScreen() {
  return <VariantSheet cta="Gunakan Voucher & Checkout" spotId="gunakan-voucher" />;
}
