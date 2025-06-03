
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GM</span>
              </div>
              <span className="font-bold text-lg">Green Musa Capital</span>
            </div>
            <p className="text-gray-300 text-sm">
              ESG-focused value investing for a sustainable future. Based in Fort Lauderdale, 
              serving clients nationwide with personalized wealth management solutions.
            </p>
            <div className="text-sm text-gray-400">
              <p>CRD #316465</p>
              <p>SEC Registered Investment Advisor</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services/portfolio-management" className="hover:text-primary transition-colors">Portfolio Management</Link></li>
              <li><Link to="/services/financial-planning" className="hover:text-primary transition-colors">Financial Planning</Link></li>
              <li><Link to="/services/esg-consulting" className="hover:text-primary transition-colors">ESG Consulting</Link></li>
              <li><Link to="/calculator" className="hover:text-primary transition-colors">Investment Calculator</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/articles" className="hover:text-primary transition-colors">Articles & Insights</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Fort Lauderdale, Florida</p>
              <p>consultations@greenmusacapital.com</p>
              <p className="text-primary font-medium">$199/hour consultations</p>
            </div>
            <div className="mt-4">
              <Link to="/consultation">
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Green Musa Capital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/compliance" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
