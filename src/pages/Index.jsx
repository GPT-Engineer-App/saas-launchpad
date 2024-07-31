import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Zap, Shield, ArrowRight } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">SaaSify</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost">Login</Button>
              <Button className="ml-4">Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Simplify Your Workflow
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Boost productivity and streamline your business processes with our cutting-edge SaaS solution.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 md:py-4 md:text-lg md:px-10">
                  Get Started
                </Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Everything you need to take your business to the next level.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Rocket className="h-6 w-6 text-blue-600 mr-2" />
                    Fast Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Get up and running quickly with our easy-to-use platform.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-6 w-6 text-blue-600 mr-2" />
                    Increased Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Streamline your workflows and boost productivity across your team.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2" />
                    Enterprise-Grade Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Rest easy knowing your data is protected with top-notch security measures.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Don't just take our word for it - hear from some of our satisfied customers!
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                quote: "SaaSify has revolutionized our workflow. We've seen a 40% increase in productivity since implementing it.",
              },
              {
                name: "Michael Chen",
                role: "CTO, InnovateCorp",
                quote: "The security features of SaaSify give us peace of mind. It's robust, reliable, and incredibly user-friendly.",
              },
              {
                name: "Emily Rodriguez",
                role: "Operations Manager, GrowthHub",
                quote: "Customer support is outstanding. Any questions we've had were addressed promptly and thoroughly.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardContent className="pt-6">
                  <blockquote className="text-lg text-gray-500 italic">"{testimonial.quote}"</blockquote>
                  <div className="mt-6">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Choose the plan that's right for your business.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {['Basic', 'Pro', 'Enterprise'].map((plan) => (
              <Card key={plan} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{plan}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-extrabold">
                    {plan === 'Basic' ? '$29' : plan === 'Pro' ? '$99' : 'Custom'}
                    {plan !== 'Enterprise' && <span className="text-base font-medium text-gray-500">/mo</span>}
                  </div>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                      <ArrowRight className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-base text-gray-500">Feature 1</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-base text-gray-500">Feature 2</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-base text-gray-500">Feature 3</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="mt-8 p-6">
                  <Button className="w-full">{plan === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-blue-200">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {/* Add social media icons here */}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              © 2023 SaaSify, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
