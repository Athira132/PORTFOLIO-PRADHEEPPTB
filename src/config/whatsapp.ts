/**
 * WhatsApp Configuration
 * 
 * To change the destination WhatsApp number for booking requests,
 * update the WHATSAPP_NUMBER constant below.
 * Provide the country code followed by the phone number with NO '+', spaces, or dashes.
 * Example: "919567654880"
 */
export const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

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
