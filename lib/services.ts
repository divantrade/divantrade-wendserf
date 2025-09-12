export type ServiceDef = {
  id: string;
  slug: string;
  titleKey: string; // messages path e.g., 'services.list.0.title'
  itemsKey: string; // messages path e.g., 'services.list.0.items'
};

// Stable slugs in EN; Arabic will use same slug in URL for consistency/SEO.
export const SERVICES: ServiceDef[] = [
  { id: 'sourcing', slug: 'product-sourcing', titleKey: 'services.list.0.title', itemsKey: 'services.list.0.items' },
  { id: 'supply-trade', slug: 'supply-and-trade', titleKey: 'services.list.1.title', itemsKey: 'services.list.1.items' },
  { id: 'customs', slug: 'customs-clearance', titleKey: 'services.list.2.title', itemsKey: 'services.list.2.items' },
  { id: 'inspection', slug: 'inspection-and-quality', titleKey: 'services.list.3.title', itemsKey: 'services.list.3.items' },
  { id: 'consulting', slug: 'consulting-services', titleKey: 'services.list.4.title', itemsKey: 'services.list.4.items' },
  { id: 'b2b', slug: 'b2b-solutions', titleKey: 'services.list.5.title', itemsKey: 'services.list.5.items' },
  { id: 'after-sales', slug: 'after-sales-support', titleKey: 'services.list.6.title', itemsKey: 'services.list.6.items' }
];
