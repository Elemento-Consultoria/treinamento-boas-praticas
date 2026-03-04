import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChevronLeft, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Limpeza() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
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
              <h1 className="text-2xl font-bold text-slate-900">Módulo Limpeza</h1>
              <p className="text-sm text-slate-500">Higienização de Instalações e Manejo de Resíduos</p>
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
              Procedimentos de Higienização
            </h2>
            <p className="text-lg text-slate-600">
              Este módulo foca nos procedimentos de manutenção da higiene das instalações, equipamentos e móveis, além do manejo correto do lixo para evitar a atração de pragas.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="higienizacao" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="higienizacao">Higienização</TabsTrigger>
              <TabsTrigger value="anexos">Preenchimento de Anexos</TabsTrigger>
              <TabsTrigger value="residuos">Manejo de Resíduos</TabsTrigger>
            </TabsList>

            {/* Tab 1: Higienização */}
            <TabsContent value="higienizacao" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Diferença entre Limpeza e Desinfecção</CardTitle>
                  <CardDescription>
                    Compreender os dois processos é essencial para a segurança dos alimentos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-900 mb-3">🧹 Limpeza</h4>
                      <p className="text-sm text-blue-800 mb-4">
                        Remoção de sujeira visível com água e detergente.
                      </p>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>• Remove resíduos de alimentos</li>
                        <li>• Remove gordura e sujeira</li>
                        <li>• Deixa a superfície visualmente limpa</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                      <h4 className="font-semibold text-emerald-900 mb-3">🧪 Desinfecção/Sanitização</h4>
                      <p className="text-sm text-emerald-800 mb-4">
                        Redução de microrganismos com agentes químicos.
                      </p>
                      <ul className="space-y-2 text-sm text-emerald-800">
                        <li>• Mata germes e bactérias</li>
                        <li>• Realizada APÓS a limpeza</li>
                        <li>• Usa solução clorada ou sanitizante</li>
                      </ul>
                    </div>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Sequência Correta</AlertTitle>
                    <AlertDescription>
                      Sempre limpar PRIMEIRO (remover sujeira) e depois desinfectar (matar germes). Nunca fazer o inverso!
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cronograma de Higienização</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4 pb-4 border-b">
                      <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Diariamente</h4>
                        <ul className="text-sm text-slate-600 mt-2 space-y-1">
                          <li>✓ Bancadas e superfícies de trabalho</li>
                          <li>✓ Utensílios e equipamentos</li>
                          <li>✓ Piso da área de produção</li>
                          <li>✓ Balcão de atendimento</li>
                          <li>✓ Sanitários</li>
                          <li>✓ Preparar solução clorada (máximo 24h de validade)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4 pb-4 border-b">
                      <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Semanalmente</h4>
                        <ul className="text-sm text-slate-600 mt-2 space-y-1">
                          <li>✓ Interior das geladeiras</li>
                          <li>✓ Ralos</li>
                          <li>✓ Paredes</li>
                          <li>✓ Prateleiras</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Mensalmente</h4>
                        <ul className="text-sm text-slate-600 mt-2 space-y-1">
                          <li>✓ Teto</li>
                          <li>✓ Luminárias</li>
                          <li>✓ Exaustores</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Equipamentos de Proteção Individual (EPI)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Avental Impermeável</p>
                        <p className="text-sm text-slate-600">Protege contra respingos de produtos químicos</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Luvas de Borracha</p>
                        <p className="text-sm text-slate-600">Protege as mãos de produtos químicos</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Botas Antiderrapantes</p>
                        <p className="text-sm text-slate-600">Evita escorregões em pisos molhados</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">Máscara (quando necessário)</p>
                        <p className="text-sm text-slate-600">Protege contra aerossóis de produtos químicos</p>
                      </div>
                    </div>
                  </div>
                  <Alert className="mt-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Importante</AlertTitle>
                    <AlertDescription>
                      Os EPIs devem ser higienizados após o uso e armazenados em local adequado.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Preenchimento de Anexos */}
            <TabsContent value="anexos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Anexo 01: Controle Mensal de Higienização</CardTitle>
                  <CardDescription>
                    Como preencher corretamente a planilha de higienização
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                    <h4 className="font-semibold text-emerald-900 mb-4">Legenda de Preenchimento</h4>
                    <div className="space-y-3">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-white border-2 border-emerald-600 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-600 font-bold">✓</span>
                        </div>
                        <div>
                          <p className="font-semibold text-emerald-900">Realizado conforme POP</p>
                          <p className="text-sm text-emerald-800">Marque quando a tarefa foi concluída corretamente</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-white border-2 border-red-600 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 font-bold">X</span>
                        </div>
                        <div>
                          <p className="font-semibold text-emerald-900">Não realizado / Não conforme</p>
                          <p className="text-sm text-emerald-800">Marque quando a tarefa não foi feita ou ficou inadequada</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Estrutura do Anexo</h4>
                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded p-4">
                        <p className="font-semibold text-blue-900 mb-2">Bloco 1 - Atividades Diárias</p>
                        <p className="text-sm text-blue-800">
                          Preenchido todos os dias (segunda a domingo). Inclui: bancadas, utensílios, piso, balcão, sanitário e solução preparada.
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded p-4">
                        <p className="font-semibold text-blue-900 mb-2">Bloco 2 - Atividades Semanais</p>
                        <p className="text-sm text-blue-800">
                          Preenchido uma vez por semana. Inclui: geladeira interna, ralos, paredes e prateleiras.
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded p-4">
                        <p className="font-semibold text-blue-900 mb-2">Bloco 3 - Atividades Mensais</p>
                        <p className="text-sm text-blue-800">
                          Preenchido uma vez por mês. Inclui: teto, luminárias e exaustores. Registre a data e responsável.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Anexo 02: Controle de Preparo da Solução Clorada</CardTitle>
                  <CardDescription>
                    Registro obrigatório para garantir eficácia da desinfecção
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Validade Crítica</AlertTitle>
                    <AlertDescription>
                      A solução clorada tem validade máxima de <strong>24 horas</strong>. Após esse período, deve ser descartada e uma nova solução preparada.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">O que registrar:</h4>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex gap-3">
                          <span className="text-emerald-600 font-bold">1.</span>
                          <span><strong>Data:</strong> Dia em que a solução foi preparada</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="text-emerald-600 font-bold">2.</span>
                          <span><strong>Horário:</strong> Hora exata do preparo</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="text-emerald-600 font-bold">3.</span>
                          <span><strong>Produto:</strong> Nome do produto clorado utilizado</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="text-emerald-600 font-bold">4.</span>
                          <span><strong>Responsável:</strong> Quem preparou a solução</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="text-emerald-600 font-bold">5.</span>
                          <span><strong>Concentração (mL/L):</strong> Quantidade de cloro por litro de água (ex: 100 mL/L)</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="text-emerald-600 font-bold">6.</span>
                          <span><strong>Conferência do Rótulo:</strong> Verificar se o produto está dentro do prazo de validade</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <h4 className="font-semibold text-amber-900 mb-3">⚠️ Observações Importantes</h4>
                      <ul className="space-y-2 text-sm text-amber-800">
                        <li>• Descartar se a solução ficar turva ou descolorida</li>
                        <li>• Preparar uma nova solução a cada dia</li>
                        <li>• Manter em local fresco e protegido da luz</li>
                        <li>• Usar apenas produtos com registro na ANVISA</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Manejo de Resíduos */}
            <TabsContent value="residuos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Procedimento Correto de Manejo de Resíduos</CardTitle>
                  <CardDescription>
                    Evitar atração de pragas e manter a higiene do ambiente
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex gap-4 pb-4 border-b">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-emerald-700">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Segregação de Resíduos</h4>
                        <p className="text-sm text-slate-600 mt-2">
                          Separar resíduos orgânicos (restos de alimentos) de recicláveis (papel, plástico) no momento da geração.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 pb-4 border-b">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-emerald-700">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Acondicionamento Adequado</h4>
                        <p className="text-sm text-slate-600 mt-2">
                          Usar recipientes com tampa acionada sem contato manual (preferencialmente com pedal) e sacos plásticos resistentes.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 pb-4 border-b">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-emerald-700">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Regra dos 2/3</h4>
                        <p className="text-sm text-slate-600 mt-2">
                          Retirar o lixo quando atingir aproximadamente <strong>2/3 da capacidade</strong> do recipiente. Evita transbordamento e atração de pragas.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 pb-4 border-b">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-emerald-700">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Coleta Interna</h4>
                        <p className="text-sm text-slate-600 mt-2">
                          Realizar no mínimo ao final de cada turno de trabalho. Evitar cruzamento com alimentos durante o transporte.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 pb-4 border-b">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-emerald-700">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Higienização das Lixeiras</h4>
                        <p className="text-sm text-slate-600 mt-2">
                          Lavar diariamente com detergente neutro e sanitizante. Deixar secar naturalmente antes de recolocar o saco plástico.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-emerald-700">
                        6
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Higiene Pessoal</h4>
                        <p className="text-sm text-slate-600 mt-2">
                          <strong>Sempre lavar as mãos</strong> após manipular o lixo, antes de retornar ao trabalho com alimentos.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Classificação de Resíduos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Resíduos Orgânicos</h4>
                      <p className="text-sm text-slate-600">Restos de alimentos, cascas, sobras</p>
                      <p className="text-xs text-slate-500 mt-2">→ Coleta pública municipal</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Resíduos Recicláveis</h4>
                      <p className="text-sm text-slate-600">Papel, papelão, plástico, latas</p>
                      <p className="text-xs text-slate-500 mt-2">→ Coleta pública municipal</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Rejeitos Comuns</h4>
                      <p className="text-sm text-slate-600">Papel higiênico, resíduos sanitários</p>
                      <p className="text-xs text-slate-500 mt-2">→ Coleta pública municipal</p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Óleo Vegetal Usado</h4>
                      <p className="text-sm text-slate-600">Quando aplicável</p>
                      <p className="text-xs text-slate-500 mt-2">→ Empresa coletora autorizada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
