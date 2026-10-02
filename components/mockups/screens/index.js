/**
 * DAFTAR LAYAR SIMULASI
 * Kunci di sini dipakai field `screen` pada setiap langkah panduan (content/guides/...).
 * Menambah layar baru: buat file di folder area yang sesuai, lalu daftarkan di bawah.
 */

import DemoScreen from "./demo/DemoScreen";
import HomeScreen from "./beranda/HomeScreen";
import VouchersScreen from "./beranda/VouchersScreen";
import VoucherProductsScreen from "./beranda/VoucherProductsScreen";
import VoucherVariantSheetScreen from "./beranda/VoucherVariantSheetScreen";
import FeedsScreen from "./feeds/FeedsScreen";
import ShareSheetScreen from "./feeds/ShareSheetScreen";
import BiolinkFormScreen from "./feeds/BiolinkFormScreen";
import ProfileScreen from "./profil/ProfileScreen";
import MyProfileScreen from "./profil/MyProfileScreen";
import MyProfileBackgroundScreen from "./profil/MyProfileBackgroundScreen";
import BiolinkManageScreen from "./profil/BiolinkManageScreen";
import MissionsScreen from "./misi/MissionsScreen";
import RedeemSheetScreen from "./misi/RedeemSheetScreen";
import BalanceScreen from "./saldo/BalanceScreen";
import KycSheetScreen from "./saldo/KycSheetScreen";
import BankSheetScreen from "./saldo/BankSheetScreen";
import WithdrawScreen from "./saldo/WithdrawScreen";
import ProductScreen from "./belanja/ProductScreen";
import BuyVariantSheetScreen from "./belanja/BuyVariantSheetScreen";
import CheckoutScreen from "./belanja/CheckoutScreen";
import PaymentSheetScreen from "./belanja/PaymentSheetScreen";
import TransactionsScreen from "./transaksi/TransactionsScreen";
import OrderDetailScreen from "./transaksi/OrderDetailScreen";

export const SCREENS = {
  // demo
  demo: DemoScreen,

  // beranda
  home: HomeScreen,
  vouchers: VouchersScreen,
  "voucher-products": VoucherProductsScreen,
  "voucher-variant": VoucherVariantSheetScreen,

  // feeds
  feeds: FeedsScreen,
  "share-sheet": ShareSheetScreen,
  "biolink-form": BiolinkFormScreen,

  // profil
  profile: ProfileScreen,
  "my-profile": MyProfileScreen,
  "my-profile-bg": MyProfileBackgroundScreen,
  "biolink-manage": BiolinkManageScreen,

  // misi
  missions: MissionsScreen,
  "redeem-sheet": RedeemSheetScreen,

  // saldo
  balance: BalanceScreen,
  "kyc-sheet": KycSheetScreen,
  "bank-sheet": BankSheetScreen,
  withdraw: WithdrawScreen,

  // belanja
  product: ProductScreen,
  "variant-sheet": BuyVariantSheetScreen,
  checkout: CheckoutScreen,
  "payment-sheet": PaymentSheetScreen,

  // transaksi
  transactions: TransactionsScreen,
  "order-detail": OrderDetailScreen,
};
