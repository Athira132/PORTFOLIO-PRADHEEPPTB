/**
 * WhatsApp Configuration
 * 
 * Destination WhatsApp number for booking and enquiry requests.
 * Format: Country code followed by phone number with NO '+', spaces, or dashes.
 * Example for India: "919876543210"
 */
export const WHATSAPP_NUMBER = "919567654880";

/**
 * Generate official WhatsApp direct link for service enquiries
 * Formats the exact message specified in requirements:
 * 
 * Hello, I would like to make an enquiry.
 * 
 * Service: [Service Name]
 * 
 * Name: 
 * Preferred Date: 
 * Preferred Time: 
 * 
 * Please provide more information.
 * 
 * Thank you.
 */
export function getWhatsAppServiceEnquiryUrl(serviceName: string): string {
  const message = `Hello, I would like to make an enquiry.

Service: ${serviceName}

Name: 
Preferred Date: 
Preferred Time: 

Please provide more information.

Thank you.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
