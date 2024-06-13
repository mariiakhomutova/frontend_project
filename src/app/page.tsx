import UpperHeader from "@/components/UpperHeader";
import DownHeader from "@/components/DownHeader";
import CategoriesPictures from "@/components/CategoriesPictures";
import Promo from "@/components/Promo";
import SpecialOffer from "@/components/SpecialOffer";
import About from "@/components/About";
import Subscription from "@/components/Subscription";
import UpperFooter from "@/components/UpperFooter";
import DownFooter from "@/components/DownFooter";
import Video from "@/components/Video";
import Catalog from "@/components/Catalogue";
import Logos from "@/components/Logos";
import Categories from "@/components/Category"

export default function Home() {
  return (
    <div>
      <div>
        <UpperHeader />
      </div>
      <div>
        <DownHeader />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Video />
      </div>
      <div>
        <CategoriesPictures />
      </div>
      <div>
        <Promo />
      </div>
      <div>
        <SpecialOffer />
      </div>
      <div>
        <Logos />
      </div>
      <div>
        <Catalog />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Subscription />
      </div>
      <div>
        <UpperFooter />
      </div>
      <div>
        <DownFooter />
      </div>
    </div>
  );
}
