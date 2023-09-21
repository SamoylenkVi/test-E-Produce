import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Promo } from '../components/Promo';
import { PromoCondition } from '../components/PromoCondition';
import { PromoPresents } from '../components/PromoPresents';

export const MainPage = () => (
  <>
    <Header />
    <Promo />
    <PromoCondition />
    <PromoPresents />
    <Footer />
  </>
);
