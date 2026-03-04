import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChevronLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function Gestora() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Módulo Gestora</h1>
              <p className="text-sm text-slate-500">Responsabilidade, Supervisão e Documentação</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Responsabilidades da Gestora
            </h2>
            <p className="text-lg text-slate-600">
              Este módulo é voltado para <strong>Andressa Barbosa Moraes</strong>, responsável pela gestão e aprovação dos processos. A gestora deve atuar como a guardiã do sistema de qualidade, garantindo que os recursos necessários estejam disponíveis e que a equipe esteja devidamente treinada.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="responsabilidades" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="responsabilidades">Responsabilidades</TabsTrigger>
              <TabsTrigger value="documentos">Gestão de Documentos</TabsTrigger>
              <TabsTrigger value="pragas">Controle de Pragas</TabsTrigger>
            </TabsList>

            {/* Tab 1: Responsabilidades */}
            <TabsContent value="responsabilidades" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Responsabilidades Principais</CardTitle>
                  <CardDescription>
                    Funções essenciais da gestora no sistema de qualidade
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Garantir Conformidade Legal</h4>
                        <p className="text-slate-600">
                          Assegurar que as atividades de produção e comercialização estejam em conformidade com a legislação sanitária vigente (RDC nº 216/2004 - ANVISA).
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Disponibilizar Recursos</h4>
                        <p className="text-slate-600">
                          Garantir que todos os materiais necessários estejam disponíveis: uniformes adequados, produtos de limpeza, equipamentos de proteção individual (EPIs) e equipamentos de monitoramento.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Capacitar a Equipe</h4>
                        <p className="text-slate-600">
                          Assegurar que todos os colaboradores sejam treinados periodicamente em Boas Práticas, com registros de capacitação arquivados.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Supervisionar Registros</h4>
                        <p className="text-slate-600">
                          Revisar periodicamente as planilhas preenchidas pela equipe, assinando nos campos de "Aprovação" ou "Verificação da Direção".
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Gestão de Documentos */}
            <TabsContent value="documentos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Validação de Registros</CardTitle>
                  <CardDescription>
                    Como revisar e aprovar os documentos da equipe
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Processo de Validação</h4>
                    <ol className="space-y-3 text-blue-800">
                      <li className="flex gap-3">
                        <span className="font-bold">1.</span>
                        <span>Revisar as planilhas preenchidas pela equipe regularmente</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">2.</span>
                        <span>Verificar se as informações estão completas e legíveis</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">3.</span>
                        <span>Assinar no campo "Aprovado por" ou "Verificação da Direção"</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">4.</span>
                        <span>Arquivar os documentos por no mínimo 6 meses</span>
                      </li>
                    </ol>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Gestão de Não Conformidades</h4>
                    <p className="text-slate-600 mb-4">
                      Quando algo der errado (ex: geladeira acima de 5°C), a gestora deve:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-amber-50 border border-amber-200 rounded p-4">
                        <p className="text-sm font-semibold text-amber-900 mb-2">📋 Registrar a Ocorrência</p>
                        <p className="text-sm text-amber-800">
                          Preencher o <strong>Anexo 03 (Registro de Não Conformidade)</strong> descrevendo o problema.
                        </p>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded p-4">
                        <p className="text-sm font-semibold text-amber-900 mb-2">🔧 Descrever a Ação Corretiva</p>
                        <p className="text-sm text-amber-800">
                          Anotar a medida tomada (ex: acionamento de manutenção, descarte de produtos impróprios).
                        </p>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded p-4">
                        <p className="text-sm font-semibold text-amber-900 mb-2">✅ Acompanhar a Resolução</p>
                        <p className="text-sm text-amber-800">
                          Verificar se a ação foi concluída e registrar a data de encerramento.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Controle de Pragas */}
            <TabsContent value="pragas" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Controle Integrado de Pragas (CIP)</CardTitle>
                  <CardDescription>
                    Responsabilidades da gestão na prevenção de vetores
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Importante</AlertTitle>
                    <AlertDescription>
                      O controle de pragas é uma responsabilidade compartilhada entre a gestão e a equipe operacional.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Responsabilidades da Gestora</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex gap-3">
                          <span className="text-blue-600">•</span>
                          <span>Manter contrato com empresa especializada em controle de vetores</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-blue-600">•</span>
                          <span>Arquivar certificados de execução de cada aplicação</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-blue-600">•</span>
                          <span>Garantir que as barreiras físicas (telas, vedações) recebam manutenção</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-blue-600">•</span>
                          <span>Revisar relatórios de inspeção mensal</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-green-900 mb-3">✓ Medidas Preventivas Estruturais</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li>• Telas milimétricas em janelas e aberturas</li>
                        <li>• Vedação inferior de portas</li>
                        <li>• Ralos sifonados com grelhas ajustadas</li>
                        <li>• Ausência de frestas em paredes, pisos e forros</li>
                        <li>• Organização e afastamento de mercadorias do piso</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Summary Card */}
          <Card className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Resumo das Responsabilidades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Diariamente</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>✓ Revisar se os colaboradores estão usando uniformes corretos</li>
                    <li>✓ Verificar se há sintomas de doença não comunicados</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Semanalmente</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>✓ Revisar as planilhas de higienização</li>
                    <li>✓ Assinar os registros de controle de temperatura</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Mensalmente</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>✓ Revisar relatório de inspeção de pragas</li>
                    <li>✓ Verificar integridade de barreiras físicas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Anualmente</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>✓ Realizar capacitação em Boas Práticas</li>
                    <li>✓ Revisar e atualizar o Manual de Boas Práticas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="container py-8">
          <div className="flex justify-between items-center text-sm text-slate-600">
            <p>© 2026 Gedeão Antônio da Silva</p>
            <Link href="/">
              <Button variant="outline" size="sm">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
