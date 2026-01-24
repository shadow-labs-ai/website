import posthog from 'posthog-js';

/**
 * Track custom events in PostHog
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && posthog.__loaded) {
    posthog.capture(eventName, properties);
  }
};

/**
 * Track navigation clicks
 */
export const trackNavigation = (section: string) => {
  trackEvent('navigation_clicked', { section });
};

/**
 * Track download app button click
 */
export const trackDownloadClick = () => {
  trackEvent('download_app_clicked');
};

/**
 * Track FAQ toggle
 */
export const trackFAQToggle = (question: string, isOpen: boolean) => {
  trackEvent('faq_toggled', { question, is_open: isOpen });
};

/**
 * Track mobile menu toggle
 */
export const trackMobileMenuToggle = (isOpen: boolean) => {
  trackEvent('mobile_menu_toggled', { is_open: isOpen });
};

/**
 * Track section view (when user scrolls to a section)
 */
export const trackSectionView = (sectionId: string) => {
  trackEvent('section_viewed', { section_id: sectionId });
};

/**
 * Track external link click
 */
export const trackExternalLinkClick = (url: string, linkType: string) => {
  trackEvent('external_link_clicked', { url, link_type: linkType });
};
