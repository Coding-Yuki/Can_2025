import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Comment recevoir mes billets ?",
    answer:
      "Apres votre achat, vous recevrez vos e-billets par email dans les minutes qui suivent. Vous pourrez egalement les telecharger depuis votre espace personnel. Presentez le QR code sur votre telephone ou imprimez le billet pour acceder au stade.",
  },
  {
    question: "Puis-je modifier ou annuler ma commande ?",
    answer:
      "Les modifications sont possibles jusqu'a 48h avant le match, sous reserve de disponibilite. Les annulations donnent droit a un avoir valable pour tout autre match de la competition. Aucun remboursement n'est possible sauf en cas d'annulation du match.",
  },
  {
    question: "Y a-t-il des tarifs reduits ?",
    answer:
      "Oui, des tarifs reduits sont disponibles pour les enfants de moins de 12 ans (-50%), les etudiants (-25%) et les personnes a mobilite reduite (gratuit pour l'accompagnateur). Un justificatif sera demande a l'entree.",
  },
  {
    question: "Combien de billets puis-je acheter ?",
    answer:
      "Vous pouvez acheter jusqu'a 4 billets par match et par compte. Pour les groupes de plus de 10 personnes, veuillez contacter notre service groupe a groupe@can2025.ma.",
  },
  {
    question: "Comment acceder au stade avec mon billet ?",
    answer:
      "Presentez votre e-billet (QR code) aux portes du stade au moins 2 heures avant le coup d'envoi. Un controle de securite est effectue a l'entree. Les portes ouvrent 3 heures avant le match pour les detenteurs de billets VIP.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les cartes bancaires (Visa, Mastercard, CMI), PayPal, et les virements bancaires. Le paiement en plusieurs fois (3x ou 4x sans frais) est disponible pour les commandes superieures a 500 MAD.",
  },
]

export function TicketFAQ() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
            QUESTIONS FREQUENTES
          </h2>
          <p className="text-muted-foreground">Tout ce que vous devez savoir sur l'achat de billets</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
