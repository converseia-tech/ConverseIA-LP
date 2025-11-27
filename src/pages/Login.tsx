import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeSlash, ArrowLeft, ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt", { email, password });
    // Implement login logic here
  };

  return (
    <div className="min-h-screen flex w-full bg-black text-white">
      {/* Left Side - Modern Background & Text */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-black border-r border-white/10">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-500/20 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[100px]" />
           <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-between p-16 w-full h-full">
          <div>
            <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-8 group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar para o site
            </Link>
          </div>
          
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              O futuro da sua gestão começa aqui.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Potencialize seus resultados com a plataforma de IA mais completa do mercado.
            </p>
          </div>
          
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} ConverseIA. Todos os direitos reservados.
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-black p-8 relative overflow-hidden">
         {/* Subtle background for right side too */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
         
        <div className="w-full max-w-md space-y-8 relative z-10">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-8">
              <img src="/logo_converseia.png" alt="ConverseIA" className="h-12 w-auto" /> 
            </div>
            <h2 className="text-3xl font-bold text-white">Bem-vindo de volta</h2>
            <p className="mt-2 text-sm text-slate-400">
              Acesse sua conta para continuar.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-200">Senha</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20 pr-10 transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <a href="#" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                Esqueci a senha
              </a>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 text-base font-medium shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02]"
            >
              Entrar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-slate-400">
              Ainda não tem uma conta?{' '}
              <Link to="/contratacao" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
                Contrate agora
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
