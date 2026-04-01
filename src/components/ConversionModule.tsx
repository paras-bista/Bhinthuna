import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConversionModuleProps {
  className?: string;
  sticky?: boolean;
}

const ConversionModule = ({ className = "", sticky = false }: ConversionModuleProps) => {
  return (
    <div
      className={`bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 ${
        sticky ? "sticky bottom-4 z-40 md:relative md:bottom-auto" : ""
      } ${className}`}
    >
      <div className="text-center mb-6">
        <h3 className="font-heading text-2xl font-bold mb-2 text-navy">Ready to Order?</h3>
        <p className="text-navy/70 text-sm">Call us to place your order in minutes.</p>
      </div>

      <div className="max-w-md mx-auto">
        <Button
          asChild
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm h-auto py-4"
        >
          <a href="tel:+610286064818" className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </Button>
      </div>

      <div className="mt-5 text-center">
        <p className="text-sm text-navy/70">
          Open today 11:00 AM - 10:00 PM | Pickup in 20-30 min | Delivery in 35-50 min
        </p>
      </div>

      <div className="mt-3 text-center">
        <a href="/catering" className="text-sm text-navy underline underline-offset-4 hover:text-primary transition-colors">
          Need catering for events? Contact us
        </a>
      </div>
    </div>
  );
};

export default ConversionModule;
