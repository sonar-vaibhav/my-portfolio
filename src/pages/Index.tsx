import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { useState, useEffect } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  console.log("🚀 Portfolio Index component is now loading!");
  
  useEffect(() => {
    console.log("Portfolio useEffect running");
    // Simulate loading and then show content
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            🎨 Portfolio Loading...
          </h1>
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="text-center py-20">
        <h1 className="text-6xl font-bold text-gradient mb-4">
          &lt;VS/&gt;
        </h1>
        <h2 className="text-2xl text-muted-foreground mb-8">
          Vaibhav Sonar - Developer Portfolio
        </h2>
        <p className="text-lg">
          🎉 Portfolio is now active! Components loading next...
        </p>
      </div>
    </div>
  );
};

export default Index;