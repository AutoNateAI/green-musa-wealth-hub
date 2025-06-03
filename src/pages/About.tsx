
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-green-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Green Musa Capital
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              We're pioneering the future of investing by combining proven value strategies 
              with environmental, social, and governance principles.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Green Musa Capital, we believe that sustainable investing isn't just about doing good—
                  it's about doing well. Our mission is to deliver superior long-term returns while creating 
                  positive environmental and social impact.
                </p>
                <p className="text-lg text-gray-600">
                  Based in Fort Lauderdale and serving clients nationwide, we combine traditional value 
                  investing principles with cutting-edge ESG analysis to identify opportunities that others miss.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every investment decision and client interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Target className="h-8 w-8 text-primary" />,
                  title: "Purpose-Driven",
                  description: "Every investment aligns with sustainable impact goals while targeting strong returns."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-primary" />,
                  title: "Performance-Focused",
                  description: "We never compromise on returns. ESG integration enhances, not limits, performance."
                },
                {
                  icon: <Shield className="h-8 w-8 text-primary" />,
                  title: "Risk-Aware",
                  description: "Comprehensive risk analysis includes environmental, social, and governance factors."
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Client-Centric",
                  description: "Personalized strategies that reflect your unique values and financial objectives."
                }
              ].map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals leading Green Musa Capital's mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Anibal Hernandez, CFA</h3>
                    <p className="text-primary font-medium text-lg">CEO & Chief Compliance Officer</p>
                  </div>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Anibal brings over 15 years of investment management experience, with previous roles 
                      at Pfizer, Fleet Advantage, and Bayview Asset Management.
                    </p>
                    <p>
                      As a CFA charterholder, he specializes in value investing methodologies and has 
                      pioneered the integration of ESG factors into traditional security analysis.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Value Investing & Security Analysis</li>
                        <li>• ESG Integration Strategies</li>
                        <li>• Portfolio Risk Management</li>
                        <li>• Regulatory Compliance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <TrendingUp className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Victor Nunez, MBA</h3>
                    <p className="text-primary font-medium text-lg">President of Research & Analytics</p>
                  </div>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Victor leads our quantitative research efforts and is the architect behind our 
                      proprietary ESG scoring models and risk assessment frameworks.
                    </p>
                    <p>
                      With an MBA in Finance and extensive experience in sustainable finance, he ensures 
                      our investment process remains data-driven and methodologically sound.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Quantitative Research & Modeling</li>
                        <li>• ESG Data Analysis</li>
                        <li>• Sustainable Finance</li>
                        <li>• Impact Measurement</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Credentials & Compliance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain the highest standards of professional excellence and regulatory compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">SEC Registered</h3>
                  <p className="text-gray-600 mb-2">Investment Advisor</p>
                  <p className="text-sm text-primary font-medium">CRD #316465</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">CFA Institute</h3>
                  <p className="text-gray-600 mb-2">Member</p>
                  <p className="text-sm text-primary font-medium">Chartered Financial Analyst</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fiduciary</h3>
                  <p className="text-gray-600 mb-2">Standard</p>
                  <p className="text-sm text-primary font-medium">Client First Commitment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
