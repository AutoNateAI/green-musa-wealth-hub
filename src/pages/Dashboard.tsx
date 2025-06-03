
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Shield, Target, BarChart3, PieChart, Settings, LogOut, Leaf, Users, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [userSession, setUserSession] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const session = localStorage.getItem('userSession');
    if (!session) {
      navigate('/login');
      return;
    }
    setUserSession(JSON.parse(session));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userSession');
    toast({
      title: "Logged out successfully",
      description: "Thank you for using Green Musa Capital",
    });
    navigate('/');
  };

  if (!userSession) {
    return null;
  }

  const portfolioData = {
    totalValue: 1247350,
    monthlyReturn: 2.4,
    ytdReturn: 12.8,
    esgScore: 8.7,
    positions: [
      { symbol: "TSLA", name: "Tesla Inc.", value: 124735, allocation: 10, esgScore: 9.2, change: 3.2 },
      { symbol: "MSFT", name: "Microsoft Corp.", value: 99788, allocation: 8, esgScore: 8.9, change: 1.8 },
      { symbol: "NFLX", name: "Netflix Inc.", value: 87412, allocation: 7, esgScore: 8.1, change: -0.5 },
      { symbol: "JNJ", name: "Johnson & Johnson", value: 74841, allocation: 6, esgScore: 8.8, change: 0.9 },
      { symbol: "UNH", name: "UnitedHealth Group", value: 62294, allocation: 5, esgScore: 7.9, change: 1.2 }
    ],
    riskMetrics: {
      riskLevel: "Moderate",
      volatility: 14.2,
      sharpeRatio: 1.34,
      maxDrawdown: -8.7
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
              <p className="text-gray-600 mt-1">Here's your ESG portfolio overview</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Portfolio Value</p>
                    <p className="text-2xl font-bold text-gray-900">
                      ${portfolioData.totalValue.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 font-medium">
                    +{portfolioData.monthlyReturn}% this month
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">YTD Return</p>
                    <p className="text-2xl font-bold text-gray-900">
                      +{portfolioData.ytdReturn}%
                    </p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-600">
                    Outperforming S&P 500 by 3.2%
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">ESG Score</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {portfolioData.esgScore}/10
                    </p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <Progress value={portfolioData.esgScore * 10} className="h-2" />
                  <span className="text-sm text-gray-600 mt-1 block">
                    Excellent ESG rating
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Risk Level</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {portfolioData.riskMetrics.riskLevel}
                    </p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-600">
                    Volatility: {portfolioData.riskMetrics.volatility}%
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Content */}
          <Tabs defaultValue="portfolio" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="robo-advisor">Robo Advisor</TabsTrigger>
              <TabsTrigger value="esg-impact">ESG Impact</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Holdings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5" />
                      Top Holdings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {portfolioData.positions.map((position, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <div>
                              <p className="font-medium text-gray-900">{position.symbol}</p>
                              <p className="text-sm text-gray-600">{position.name}</p>
                            </div>
                            <Badge variant="outline" className="ml-auto">
                              ESG: {position.esgScore}
                            </Badge>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-sm text-gray-600">
                              ${position.value.toLocaleString()} ({position.allocation}%)
                            </span>
                            <span className={`text-sm font-medium ${
                              position.change >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {position.change >= 0 ? '+' : ''}{position.change}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Performance Chart Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Performance Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Portfolio performance chart</p>
                        <p className="text-sm text-gray-500">Interactive chart would be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="robo-advisor" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Risk Management & Recommendations
                  </CardTitle>
                  <p className="text-gray-600">AI-powered portfolio optimization and risk assessment</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Risk Assessment */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4 text-center">
                        <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="font-medium text-blue-900">Risk Score</p>
                        <p className="text-2xl font-bold text-blue-900">6.2/10</p>
                        <p className="text-sm text-blue-700">Moderate Risk</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="font-medium text-green-900">Sharpe Ratio</p>
                        <p className="text-2xl font-bold text-green-900">{portfolioData.riskMetrics.sharpeRatio}</p>
                        <p className="text-sm text-green-700">Good Risk-Adjusted Return</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-orange-50 border-orange-200">
                      <CardContent className="p-4 text-center">
                        <TrendingDown className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <p className="font-medium text-orange-900">Max Drawdown</p>
                        <p className="text-2xl font-bold text-orange-900">{portfolioData.riskMetrics.maxDrawdown}%</p>
                        <p className="text-sm text-orange-700">Within Target Range</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Current Recommendations</h3>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-green-900">Rebalancing Opportunity</p>
                            <p className="text-sm text-green-700 mt-1">
                              Consider reducing TSLA allocation by 2% and increasing clean energy ETF exposure.
                            </p>
                            <Button size="sm" className="mt-2" variant="outline">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Shield className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-blue-900">Risk Optimization</p>
                            <p className="text-sm text-blue-700 mt-1">
                              Your portfolio could benefit from adding defensive ESG positions for better downside protection.
                            </p>
                            <Button size="sm" className="mt-2" variant="outline">
                              Explore Options
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="bg-purple-100 p-2 rounded-lg">
                            <Leaf className="h-4 w-4 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-purple-900">ESG Enhancement</p>
                            <p className="text-sm text-purple-700 mt-1">
                              New sustainable infrastructure funds available that match your investment criteria.
                            </p>
                            <Button size="sm" className="mt-2" variant="outline">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="esg-impact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5" />
                    ESG Impact Dashboard
                  </CardTitle>
                  <p className="text-gray-600">Track the environmental and social impact of your investments</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Leaf className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">12.4 tons</p>
                      <p className="text-sm text-gray-600">CO₂ Avoided Annually</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">2,847</p>
                      <p className="text-sm text-gray-600">Jobs Supported</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="h-8 w-8 text-purple-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">8.7/10</p>
                      <p className="text-sm text-gray-600">Overall ESG Score</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">ESG Breakdown by Category</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Environmental (E)</span>
                          <span className="text-sm text-gray-600">9.1/10</span>
                        </div>
                        <Progress value={91} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Social (S)</span>
                          <span className="text-sm text-gray-600">8.5/10</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Governance (G)</span>
                          <span className="text-sm text-gray-600">8.4/10</span>
                        </div>
                        <Progress value={84} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Management</CardTitle>
                  <p className="text-gray-600">Manage your account settings and preferences</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-gray-700">Email</p>
                          <p className="text-gray-900">admin@greenmusacapital.com</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Account Type</p>
                          <p className="text-gray-900">Premium Client</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Last Login</p>
                          <p className="text-gray-900">{new Date(userSession.loginTime).toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Preferences</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-gray-700">Risk Tolerance</p>
                          <p className="text-gray-900">Moderate</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">ESG Priority</p>
                          <p className="text-gray-900">High</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Investment Horizon</p>
                          <p className="text-gray-900">15+ years</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline">Edit Profile</Button>
                    <Button variant="outline">Change Password</Button>
                    <Button variant="outline">Download Reports</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
