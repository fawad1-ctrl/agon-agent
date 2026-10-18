import { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustLine from "./components/TrustLine";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Spotlight from "./components/Spotlight";
import CustomTeaser from "./components/CustomTeaser";
import BrandStatement from "./components/BrandStatement";
import Reviews from "./components/Reviews";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchOverlay from "./components/SearchOverlay";
import QuickView from "./components/QuickView";
import { CartProvider } from "./lib/cart";
import type { Product } from "./data/products";

export default function App() {
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-ink">
        <AnnouncementBar />
        <Header onOpenSearch={() => setSearchOpen(true)} />

        <main>
          <Hero />
          <TrustLine />
          <Categories />
          <FeaturedProducts onQuickView={setQuickView} />
          <Spotlight />
          <CustomTeaser />
          <BrandStatement />
          <Reviews />
          <Newsletter />
        </main>

        <Footer />

        <CartDrawer />
        <SearchOverlay
          open={searchOpen}
          onClose={() => setSearchOpen(false)}
          onSelect={setQuickView}
        />
        <QuickView product={quickView} onClose={() => setQuickView(null)} />
      </div>
    </CartProvider>
  );
}
