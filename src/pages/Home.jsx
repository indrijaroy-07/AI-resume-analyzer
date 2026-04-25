import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center mt-[-64px]">
        
        {/* Hero Section */}
        <div className="max-w-3xl space-y-8 mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Now analyzing resumes with advanced AI
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Elevate Your Career with <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">AI Resume Analyzer</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Upload your resume and get instant, actionable feedback. Match your skills against job descriptions and land your dream job faster.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
            >
              Get Started for Free
            </Link>
            <Link 
              to="/signup" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-slate-700 font-medium hover:bg-slate-50 border border-slate-200 transition-all hover:-translate-y-0.5"
            >
              Log In
            </Link>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full border-t border-slate-200 pt-12">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-green-100 text-green-600 rounded-2xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900">100% Secure</h3>
            <p className="text-sm text-slate-500">Your data is encrypted and never shared.</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900">AI Powered</h3>
            <p className="text-sm text-slate-500">Industry-leading analysis algorithms.</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900">Instant Results</h3>
            <p className="text-sm text-slate-500">Get your feedback in under 10 seconds.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
