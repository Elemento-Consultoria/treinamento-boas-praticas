import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Droplet, Wheat } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Boas Práticas</h1>
                <p className="text-xs text-slate-500">Gedeão Antônio da Silva</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Treinamento em Boas Práticas
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Capacitação completa sobre Procedimentos Operacionais Padrão (POPs) e segurança dos alimentos. Escolha seu perfil para começar.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </div>

        {/* Training Modules */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Gestora Module */}
          <Link href="/gestora">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-slate-200 hover:border-blue-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Módulo Gestora</CardTitle>
                <CardDescription>Responsabilidade e Supervisão</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-6">
                  Aprenda sobre validação de registros, gestão de não conformidades e controle de pragas.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Acessar Módulo
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Limpeza Module */}
          <Link href="/limpeza">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-slate-200 hover:border-emerald-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Droplet className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-slate-900">Módulo Limpeza</CardTitle>
                <CardDescription>Higienização e Resíduos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-6">
                  Domine os procedimentos de higienização e preenchimento correto dos anexos de controle.
                </p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Acessar Módulo
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Panificação Module */}
          <Link href="/panificacao">
            <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-slate-200 hover:border-amber-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Wheat className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle className="text-slate-900">Módulo Panificação</CardTitle>
                <CardDescription>Produção e Controle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-6">
                  Controle de temperatura, higiene pessoal e prevenção de contaminação cruzada.
                </p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Acessar Módulo
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link href="/guia-anexos">
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-slate-200 hover:border-purple-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <CardTitle className="text-purple-900">📋 Guia de Preenchimento de Anexos</CardTitle>
                <CardDescription>Instruções passo a passo para cada formulário</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-purple-800">Aprenda como preencher corretamente todos os anexos dos POPs</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-slate-200 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Por que as Boas Práticas são Importantes?
          </h3>
          
          <div className="space-y-4 text-slate-700">
            <p>
              O Manual de Boas Práticas não é apenas uma exigência da Vigilância Sanitária, mas um <strong>compromisso com a saúde do consumidor</strong>. Os Procedimentos Operacionais Padrão (POPs) funcionam como o "passo a passo" oficial do estabelecimento, garantindo que todas as tarefas sejam realizadas da mesma forma.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="font-semibold text-blue-900">
                💡 Mensagem Central:
              </p>
              <p className="text-blue-800 mt-2">
                "O que não está registrado, não foi feito". Os anexos são a nossa defesa técnica e a prova de que seguimos as normas de segurança.
              </p>
            </div>

            <p>
              Quando cada profissional cumpre o seu POP e preenche corretamente o seu anexo, o empreendimento cresce com qualidade e segurança jurídica.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>© 2026 Gedeão Antônio da Silva - Manual de Boas Práticas</p>
            <p>Versão 2026 | Elaborado por Reinaldo Soares Junior</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
