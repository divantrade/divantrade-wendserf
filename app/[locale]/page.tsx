import Hero from '@/components/Hero';
import Offices from '@/components/Offices';
import ServicesGrid from '@/components/ServicesGrid';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <ServicesGrid />

      <section>
        <Offices />
      </section>
    </div>
  );
}
