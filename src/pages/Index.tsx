
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowDown, TrendingUp, Shield, Target, Users } from 'lucide-react';

const Index = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '$50T', label: 'Global ESG Assets by 2025', subtext: 'Projected market size' },
    { value: '85%', label: 'Millennials Prefer ESG', subtext: 'Sustainable investing preference' },
    { value: '15%', label: 'Better Long-term Returns', subtext: 'ESG vs traditional portfolios' },
    { value: '40%', label: 'Risk Reduction', subtext: 'Through ESG integration' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <div className="text-white space-y-8 animate-fade-in-up">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Your Values,
                    <br />
                    <span className="text-green-200">Your Wealth</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                    Traditional investing ignores what matters most. We combine proven value investing 
                    with ESG principles to build wealth that aligns with your conscience.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/consultation">
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                      Book Free Consultation
                    </Button>
                  </Link>
                  <Link to="/calculator">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                      Try Our Calculator
                    </Button>
                  </Link>
                </div>

                {/* Dynamic Stats */}
                <div className="glass-effect rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {stats[currentStat].value}
                    </div>
                    <div className="text-green-200 font-medium mb-1">
                      {stats[currentStat].label}
                    </div>
                    <div className="text-green-100 text-sm">
                      {stats[currentStat].subtext}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="glass-effect rounded-3xl p-8 backdrop-blur-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Sustainable investing visualization" 
                    className="rounded-2xl w-full h-64 object-cover"
                  />
                  <div className="mt-6 space-y-4">
                    <h3 className="text-white text-xl font-semibold">ESG-Focused Value Investing</h3>
                    <p className="text-green-100">
                      Our proprietary models identify undervalued companies with strong ESG practices, 
                      delivering both financial returns and positive impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              The Problem with Traditional Investing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most investment strategies prioritize short-term gains over long-term sustainability, 
              ignoring environmental and social risks that could devastate portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Blindness",
                description: "Traditional portfolios often include companies facing massive climate-related liabilities and stranded assets.",
                impact: "Potential 20% portfolio loss from climate risks by 2030"
              },
              {
                title: "Social Disconnect",
                description: "Investing in companies with poor labor practices or social impact creates reputational and regulatory risks.",
                impact: "67% of consumers avoid brands with poor social records"
              },
              {
                title: "Governance Failures",
                description: "Poor corporate governance leads to scandals, fines, and shareholder value destruction.",
                impact: "Companies with weak governance underperform by 8% annually"
              }
            ].map((problem, index) => (
              <Card key={index} className="border-red-100 bg-red-50/50 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">{problem.title}</h3>
                  <p className="text-gray-700 mb-4">{problem.description}</p>
                  <div className="text-sm font-medium text-red-600 bg-red-100 p-3 rounded-lg">
                    ⚠️ {problem.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              The Green Musa Capital Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've spent years developing proprietary ESG-focused value investing models 
              that identify opportunities others miss while managing risks others ignore.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Proven Value Investing Foundation
                  </h3>
                  <p className="text-gray-600">
                    Our core methodology is built on time-tested value investing principles, 
                    enhanced with modern ESG analysis for superior risk-adjusted returns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Comprehensive Risk Management
                  </h3>
                  <p className="text-gray-600">
                    We identify and mitigate environmental, social, and governance risks 
                    before they impact your portfolio's performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Proprietary ESG Models
                  </h3>
                  <p className="text-gray-600">
                    Our quantitative models analyze thousands of ESG data points 
                    to identify companies positioned for long-term outperformance.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Financial analysis and ESG integration" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "12%", label: "Avg Annual Returns", period: "5-year track record" },
              { metric: "25%", label: "Lower Volatility", period: "vs S&P 500" },
              { metric: "98%", label: "Client Satisfaction", period: "Based on surveys" },
              { metric: "$50M+", label: "Assets Under Management", period: "Growing portfolio" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-lg font-medium text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of Wall Street experience with deep expertise 
              in ESG analysis and sustainable investing strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Anibal Hernandez, CFA</h3>
                <p className="text-primary font-medium mb-4">CEO & Chief Compliance Officer</p>
                <p className="text-gray-600">
                  Former experience at Pfizer, Fleet Advantage, and Bayview Asset Management. 
                  Expert in value investing with ESG integration.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Victor Nunez, MBA</h3>
                <p className="text-primary font-medium mb-4">President of Research & Analytics</p>
                <p className="text-gray-600">
                  Leads our quantitative research efforts and proprietary ESG model development. 
                  Specializes in sustainable finance and impact measurement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Align Your Investments with Your Values?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join forward-thinking investors who are building wealth while creating positive impact. 
            Schedule your $199 consultation today and discover how ESG investing can transform your portfolio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                Schedule Consultation ($199)
              </Button>
            </Link>
            <Link to="/calculator">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                Try Our Free Calculator
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-green-200 text-sm">
            <p>✓ SEC Registered Investment Advisor (CRD #316465)</p>
            <p>✓ Personalized Portfolio Management</p>
            <p>✓ Quarterly Performance Reporting</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
