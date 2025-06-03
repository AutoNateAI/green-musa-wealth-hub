
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, DollarSign, Users, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    timeframe: '',
    experience: '',
    esgInterest: '',
    primaryGoals: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Scheduled!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        investmentAmount: '',
        timeframe: '',
        experience: '',
        esgInterest: '',
        primaryGoals: '',
        preferredDate: '',
        preferredTime: '',
        additionalNotes: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-green-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Schedule Your Consultation
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Get personalized ESG investment advice from our experts. 
              Book your $199 strategic consultation today.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Consultation Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">Consultation Request</CardTitle>
                    <p className="text-gray-600">
                      Tell us about your investment goals and we'll create a personalized strategy discussion.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              placeholder="John Smith"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      {/* Investment Profile */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Investment Profile</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="investmentAmount">Investable Assets</Label>
                            <Select value={formData.investmentAmount} onValueChange={(value) => handleInputChange('investmentAmount', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-100k">Under $100,000</SelectItem>
                                <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                                <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                                <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                                <SelectItem value="over-5m">Over $5,000,000</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timeframe">Investment Timeframe</Label>
                            <Select value={formData.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeframe" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="short">1-3 years</SelectItem>
                                <SelectItem value="medium">3-7 years</SelectItem>
                                <SelectItem value="long">7-15 years</SelectItem>
                                <SelectItem value="retirement">15+ years (retirement)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="experience">Investment Experience</Label>
                            <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select experience level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="beginner">Beginner</SelectItem>
                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                <SelectItem value="advanced">Advanced</SelectItem>
                                <SelectItem value="professional">Professional</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="esgInterest">ESG Interest Level</Label>
                            <Select value={formData.esgInterest} onValueChange={(value) => handleInputChange('esgInterest', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="How important is ESG?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="very-high">Very High Priority</SelectItem>
                                <SelectItem value="high">High Priority</SelectItem>
                                <SelectItem value="moderate">Moderate Interest</SelectItem>
                                <SelectItem value="low">Low Priority</SelectItem>
                                <SelectItem value="learning">Want to Learn More</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Goals and Scheduling */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Goals & Scheduling</h3>
                        <div className="space-y-2">
                          <Label htmlFor="primaryGoals">Primary Investment Goals</Label>
                          <Textarea
                            id="primaryGoals"
                            value={formData.primaryGoals}
                            onChange={(e) => handleInputChange('primaryGoals', e.target.value)}
                            placeholder="e.g., Retirement planning, ESG alignment, wealth preservation..."
                            rows={3}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="preferredDate">Preferred Date</Label>
                            <Input
                              id="preferredDate"
                              type="date"
                              value={formData.preferredDate}
                              onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="preferredTime">Preferred Time</Label>
                            <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                                <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="additionalNotes">Additional Notes</Label>
                          <Textarea
                            id="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                            placeholder="Any specific questions or topics you'd like to discuss..."
                            rows={3}
                          />
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Schedule Consultation ($199)'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Consultation Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">60-minute session</p>
                        <p className="text-sm text-gray-600">Comprehensive portfolio review</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">$199 flat fee</p>
                        <p className="text-sm text-gray-600">No hidden costs or obligations</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Expert advisors</p>
                        <p className="text-sm text-gray-600">CFA and MBA credentials</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What You'll Receive</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Personalized ESG investment strategy",
                      "Risk assessment and portfolio analysis", 
                      "Tax-efficient investment recommendations",
                      "ESG impact measurement framework",
                      "Quarterly reporting structure overview",
                      "Next steps and implementation plan"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-primary to-green-700 text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Questions?</h3>
                    <p className="text-sm text-green-100 mb-4">
                      Contact us for more information about our services.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>consultations@greenmusacapital.com</p>
                      <p>Fort Lauderdale, Florida</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Consultation;
