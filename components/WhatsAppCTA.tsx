export default function WhatsAppCTA() {
  const phoneNumber = "385991217068"; // +385 99 121 7068 without +
  const message = encodeURIComponent("Hi HLAM! I'm interested in learning more about your retreat and accommodations.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-sage text-white px-8 py-3 rounded-lg font-semibold hover:bg-sage/80 transition shadow-md hover:shadow-lg"
    >
      <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.29.562-2.487 1.364-3.43 2.325-2.325 2.325-3.61 5.471-3.61 8.793s1.285 6.468 3.61 8.793c.943.961 2.14 1.763 3.43 2.325a9.877 9.877 0 004.255.949h.004c4.857 0 8.793-3.936 8.793-8.793s-3.936-8.793-8.793-8.793Z" />
      </svg>
      Message on WhatsApp
    </a>
  );
}
