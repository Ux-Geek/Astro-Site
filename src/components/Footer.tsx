import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-white border-t border-warm-stone">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Logo className="h-6 w-auto text-deep-charcoal" />
            <span className="font-sans text-2xl font-bold tracking-[2px] text-deep-charcoal">STRO</span>
          </div>
          <p className="text-supporting-gray leading-relaxed">
            Premium automotive care for discerning drivers. Built on precision and trust.
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Location</h4>
          <address className="not-italic text-supporting-gray space-y-2">
            <p>4722 South 13th Street</p>
            <p>Milwaukee, WI 53221</p>
            <p>United States</p>
          </address>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Contact</h4>
          <div className="text-supporting-gray space-y-2">
            <p>+1 (414) 319-9400</p>
            <p>service@milwaukee-astro.com</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Hours</h4>
          <div className="text-supporting-gray space-y-2">
            <p>Mon — Fri: 08:00 - 18:00</p>
            <p>Sat: 09:00 - 14:00</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-warm-stone flex flex-col md:row justify-between items-center gap-4 text-xs text-supporting-gray uppercase tracking-widest">
        <p>© 2026 ASTRO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-orange transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
