import { useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, Play } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalysis, setHasAnalysis] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    if (!file || !jobDescription) return;
    
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalysis(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-2">Upload your resume and the job description you're applying for to get AI-powered insights.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Input Column */}
          <div className="space-y-6">
            
            {/* Upload Area */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Resume Upload
              </h2>
              <div className="relative border-2 border-dashed border-primary/30 rounded-xl p-8 hover:bg-primary/5 transition-colors group cursor-pointer text-center">
                <input 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  {file ? (
                    <div>
                      <p className="font-medium text-slate-800">{file.name}</p>
                      <p className="text-xs text-slate-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-medium text-slate-800">Click to upload or drag and drop</p>
                      <p className="text-sm text-slate-500 mt-1">PDF, DOC, or DOCX (max. 5MB)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Job Description Area */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Job Description
              </h2>
              <textarea
                rows="6"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm text-slate-700"
                placeholder="Paste the target job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Analyze Button */}
            <button
              onClick={handleAnalyze}
              disabled={!file || !jobDescription || isAnalyzing}
              className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-medium text-lg transition-all shadow-md ${
                !file || !jobDescription
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 shadow-primary/30'
              }`}
            >
              {isAnalyzing ? (
                <div className="flex items-center gap-2 animate-pulse">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Analyzing...
                </div>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current" />
                  Analyze Resume
                </>
              )}
            </button>
          </div>

          {/* Results Column */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Analysis Results</h2>
            
            {!hasAnalysis ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-100 rounded-xl bg-slate-50">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-slate-700 font-medium mb-2">No Analysis Yet</h3>
                <p className="text-sm text-slate-500">Upload your resume and a job description to get a detailed match report and improvement suggestions.</p>
              </div>
            ) : (
              <div className="flex-1 space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-100 rounded-xl">
                  <div>
                    <h3 className="text-green-800 font-semibold text-lg">85% Match Score</h3>
                    <p className="text-green-600 text-sm">Strong fit for this role</p>
                  </div>
                  <div className="relative w-16 h-16 flex items-center justify-center bg-white rounded-full border-[4px] border-green-400">
                     <span className="text-green-600 font-bold">85</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-slate-800">Key Strengths</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      Strong experience with React and modern frontend frameworks.
                    </li>
                    <li className="flex gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      Demonstrated leadership in agile team environments.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-slate-800">Areas for Improvement</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      </div>
                      Highlight more measurable achievements (e.g., % increase in performance).
                    </li>
                    <li className="flex gap-2 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      </div>
                      Missing keywords: "GraphQL", "Tailwind CSS". Consider adding if applicable.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
