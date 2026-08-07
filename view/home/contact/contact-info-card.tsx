import { personalData } from "@/lib/data/personal-data";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfoCard() {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-border/60 bg-muted/25 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:bg-muted/35 hover:shadow-md sm:p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
          <Mail className="h-5 w-5" />
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-medium text-muted-foreground">Email</p>
          <a href={`mailto:${personalData.email}`} className="text-base font-semibold text-foreground hover:underline transition-colors truncate block">
            {personalData.email}
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
          <Phone className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Phone</p>
          <a href={`tel:${personalData.phone}`} className="text-base font-semibold text-foreground hover:underline transition-colors">
            {personalData.phone}
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Location</p>
          <p className="text-base font-semibold text-foreground">
            {personalData.location}
          </p>
        </div>
      </div>
    </div>
  );
}
