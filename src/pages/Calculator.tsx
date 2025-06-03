
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calculator as CalculatorIcon, TrendingUp, Shield, Target, ArrowRight } from 'lucide-react';

const Calculator = () => {
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [riskTolerance, setRiskTolerance] = useState([5]);
  const [esgPriority, setEsgPriority] = useState([7]);
  const [hasUsedCalculator, setHasUsedCalculator] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  useEffect(() => {
    const used = localStorage.getItem('calculatorUsed');
    if (used) {
      setHasUsedCalculator(true);
    }
  }, []);

  const calculateProjections = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const traditionalReturn = 0.07; // 7% traditional portfolio
    const esgReturn = 0.075; // 7.5% ESG-enhanced portfolio
    const monthlyRate = esgReturn / 12;
    
    // Future value calculation with monthly contributions
    const futureValue = currentSavings * Math.pow(1 + esgReturn, yearsToRetirement) +
                       monthlyContribution * ((Math.pow(1 + monthlyRate, yearsToRetirement * 12) - 1) / monthlyRate);
    
    const traditionalValue = currentSavings * Math.pow(1 + traditionalReturn, yearsToRetirement) +
                            monthlyContribution * ((Math.pow(1 + traditionalReturn / 12, yearsToRetirement * 12) - 1) / (traditionalReturn / 12));
    
    return {
      esgPortfolio: futureValue,
      traditionalPortfolio: traditionalValue,
      advantage: futureValue - traditionalValue,
      yearsToRetirement
    };
  };

  const handleCalculate = () => {
    if (!hasUsedCalculator) {
      localStorage.setItem('calculatorUsed', 'true');
      setHasUsedCalculator(true);
    } else {
      setShowLoginDialog(true);
    }
  };

  const projections = calculateProjections();
  const riskLevel = riskTolerance[0];
  const esgImportance = esgPriority[0];

  const getRiskDescription = (level: number) => {
    if (level <= 3) return "Conservative - Focus on capital preservation";
    if (level <= 6) return "Moderate - Balanced growth and stability";
    return "Aggressive - Maximum growth potential";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-green-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CalculatorIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ESG Investment Calculator
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Discover how ESG-focused investing can enhance your long-term wealth 
              while creating positive impact. Get personalized projections based on your goals.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Input Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">Investment Parameters</CardTitle>
                    <p className="text-gray-600">
                      Enter your details to see how ESG investing can work for you.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Age Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentAge">Current Age</Label>
                        <Input
                          id="currentAge"
                          type="number"
                          value={currentAge}
                          onChange={(e) => setCurrentAge(Number(e.target.value))}
                          min="18"
                          max="80"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="retirementAge">Retirement Age</Label>
                        <Input
                          id="retirementAge"
                          type="number"
                          value={retirementAge}
                          onChange={(e) => setRetirementAge(Number(e.target.value))}
                          min={currentAge + 1}
                          max="85"
                        />
                      </div>
                    </div>

                    {/* Financial Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentSavings">Current Savings ($)</Label>
                        <Input
                          id="currentSavings"
                          type="number"
                          value={currentSavings}
                          onChange={(e) => setCurrentSavings(Number(e.target.value))}
                          min="0"
                          step="1000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
                        <Input
                          id="monthlyContribution"
                          type="number"
                          value={monthlyContribution}
                          onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                          min="0"
                          step="100"
                        />
                      </div>
                    </div>

                    {/* Risk Tolerance Slider */}
                    <div className="space-y-4">
                      <Label>Risk Tolerance: {riskLevel}/10</Label>
                      <Slider
                        value={riskTolerance}
                        onValueChange={setRiskTolerance}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <p className="text-sm text-gray-600">{getRiskDescription(riskLevel)}</p>
                    </div>

                    {/* ESG Priority Slider */}
                    <div className="space-y-4">
                      <Label>ESG Importance: {esgImportance}/10</Label>
                      <Slider
                        value={esgPriority}
                        onValueChange={setEsgPriority}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <p className="text-sm text-gray-600">
                        How important are environmental, social, and governance factors to you?
                      </p>
                    </div>

                    <Button 
                      onClick={handleCalculate}
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
                      size="lg"
                    >
                      Calculate My ESG Investment Potential
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Results Panel */}
              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Projection Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        ${projections.esgPortfolio.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </div>
                      <p className="text-gray-600 mb-4">Projected ESG Portfolio Value</p>
                      
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div className="text-lg font-semibold text-green-800 mb-1">
                          +${projections.advantage.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </div>
                        <p className="text-sm text-green-700">
                          Advantage over traditional portfolio
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Traditional Portfolio:</span>
                        <span className="font-medium">
                          ${projections.traditionalPortfolio.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Years to Retirement:</span>
                        <span className="font-medium">{projections.yearsToRetirement}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Assumed ESG Return:</span>
                        <span className="font-medium">7.5% annually</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Strategy Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Recommended Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {riskLevel <= 4 && (
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">Conservative ESG Focus</p>
                            <p className="text-xs text-gray-600">Green bonds, dividend aristocrats with strong ESG scores</p>
                          </div>
                        </div>
                      )}
                      {riskLevel >= 5 && riskLevel <= 7 && (
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">Balanced ESG Growth</p>
                            <p className="text-xs text-gray-600">Mix of ESG equities and sustainable sector funds</p>
                          </div>
                        </div>
                      )}
                      {riskLevel >= 8 && (
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">Growth-Oriented ESG</p>
                            <p className="text-xs text-gray-600">Clean tech, renewable energy, and ESG growth stocks</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-r from-primary to-green-700 text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Ready to Get Started?</h3>
                    <p className="text-sm text-green-100 mb-4">
                      Schedule a consultation to create your personalized ESG investment strategy.
                    </p>
                    <Link to="/consultation">
                      <Button className="bg-white text-primary hover:bg-gray-100 w-full">
                        Book Consultation ($199)
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Login Dialog for Return Users */}
        <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Login Required</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-gray-600">
                To continue using the calculator, please log in to your account or create a new one.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/login" onClick={() => setShowLoginDialog(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Login to Continue
                  </Button>
                </Link>
                <Link to="/consultation" onClick={() => setShowLoginDialog(false)}>
                  <Button variant="outline" className="w-full">
                    Schedule Consultation Instead
                  </Button>
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How ESG Investing Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our approach combines traditional value investing with comprehensive ESG analysis 
                to identify opportunities that deliver both returns and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "ESG Screening",
                  description: "We analyze environmental, social, and governance factors to identify companies with sustainable competitive advantages."
                },
                {
                  step: "02", 
                  title: "Value Analysis",
                  description: "Traditional financial metrics are combined with ESG scores to find undervalued companies with strong fundamentals."
                },
                {
                  step: "03",
                  title: "Portfolio Construction",
                  description: "Personalized portfolios are built based on your risk tolerance, timeline, and ESG priorities."
                }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Calculator;
