import { Phone, Mail, MessageSquare } from "lucide-react";
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
        <p className="text-navy/70 text-sm">
          Contact us now to place your order or inquire about our services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Call Now Button */}
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm h-auto py-4"
        >
          <a href="tel:+610286064818" className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </Button>

        {/* Email Button */}
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-2 border-navy/20 font-semibold h-auto py-4 hover:bg-navy/5 hover:border-navy/30"
        >
          <a href="mailto:admin@bhintunahouse.com.au" className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            <span>Send Email</span>
          </a>
        </Button>

        {/* Inquiry Form Button */}
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-2 border-navy/20 font-semibold h-auto py-4 hover:bg-navy/5 hover:border-navy/30"
        >
          <a href="#inquiry-form" className="flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5" />
            <span>Inquiry Form</span>
          </a>
        </Button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-navy/70">
          <span className="font-semibold">Phone:</span> 02 8606 4818
        </p>
      </div>
    </div>
  );
};

export default ConversionModule;
