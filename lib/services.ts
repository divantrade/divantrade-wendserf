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

export const SERVICE_IMAGES: Record<string, {hero: string; detail: string}> = {
  // Product Sourcing
  sourcing: {
    hero: '/images/services/warehouse-managers-looking-clipboard-boxes.jpg',
    detail: '/images/services/female-entrepreneur-discussing-building-material-sample-with-male-colleague-workshop.jpg'
  },
  // Supply & Trade
  'supply-trade': {
    hero: '/images/services/business-logistic-import-export-transport-industry-transportation-logistic-network-distribution-growth-container-cargo-ship-trucks-industrial-cargo-freight-shipping.jpg',
    detail: '/images/services/different-types-international-transport-concept-building-world-trade-wooden-box-technology-idea.jpg'
  },
  // Customs Clearance
  customs: {
    hero: '/images/services/compliance-system-modish-online-corporate-business-meet-quality-standard.jpg',
    detail: '/images/services/compliance-system-modish-online-corporate-business.jpg'
  },
  // Inspection & Quality Assurance
  inspection: {
    hero: '/images/services/portrait-serious-smart-young-man-pointing-front-looking-through-magnifying-glass-while-investigating-you.jpg',
    detail: '/images/services/factory-writing-manager-checking-inventory-with-storage-checklist-supply-chain-warehouse-coworkers-team-employees-reading-documents-paperwork-clipboard-logistics-depot.jpg'
  },
  // Consulting Services
  consulting: {
    hero: '/images/services/professional-team-engaging-in-a-productive-busines-2025-09-02-22-50-30-utc.jpg',
    detail: '/images/services/businessman-and-businesswoman-discussing-a-project-2025-01-08-23-25-31-utc.jpg'
  },
  // B2B Solutions
  b2b: {
    hero: '/images/services/hand-businessman-icon-b2b-business-business-virtual-screen-internet-business-big-data-technology-concept.jpg',
    detail: '/images/services/b2b-business-technology-marketing-company-commerce-concept.jpg'
  },
  // After-Sales Support
  'after-sales': {
    hero: '/images/services/customer-service-evaluation-concept-smiling-asian-female-is-using-smartphone-she-is-pressing-face-emoticon-smile-satisfaction-virtual-touch-screen.jpg',
    detail: '/images/services/business-woman-start-up-small-business-entrepreneur-sme-success-freelance-woman-working-home-with-online-parcel-delivery-sme-packaging-deliveryconcept.jpg'
  }
};
