import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChevronLeft, CheckCircle2, AlertCircle, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function Panificacao() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
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
              <h1 className="text-2xl font-bold text-slate-900">Módulo Panificação</h1>
              <p className="text-sm text-slate-500">Produção, Higiene Pessoal e Controle de Temperatura</p>
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
              Procedimentos de Produção e Manipulação
            </h2>
            <p className="text-lg text-slate-600">
              O manipulador de alimentos é a peça-chave na prevenção da contaminação direta. Este módulo aborda desde a higiene pessoal até o controle rigoroso de temperatura durante a produção.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="higiene" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="higiene">Higiene Pessoal</TabsTrigger>
              <TabsTrigger value="recebimento">Recebimento</TabsTrigger>
              <TabsTrigger value="temperatura">Temperatura</TabsTrigger>
              <TabsTrigger value="contaminacao">Contaminação</TabsTrigger>
            </TabsList>

            {/* Tab 1: Higiene Pessoal */}
            <TabsContent value="higiene" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Regras de Ouro da Higiene Pessoal</CardTitle>
                  <CardDescription>
                    Requisitos obrigatórios para manipuladores de alimentos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <h4 className="font-semibold text-amber-900 mb-4">✓ O que é Obrigatório</h4>
                      <ul className="space-y-3 text-sm text-amber-800">
                        <li className="flex gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>Unhas curtas e limpas</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>Sem esmalte nas unhas</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>Uniforme limpo e conservado</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>Touca cobrindo totalmente os cabelos</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>Calçado fechado e antiderrapante</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 className="font-semibold text-red-900 mb-4">✗ O que é Proibido</h4>
                      <ul className="space-y-3 text-sm text-red-800">
                        <li className="flex gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Usar adornos (anéis, pulseiras, relógios, brincos)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Fumar na área de manipulação</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Tossir ou espirrar sobre os alimentos</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Mascar goma ou comer alimentos</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Manipular celular durante a produção</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lavagem Correta das Mãos</CardTitle>
                  <CardDescription>
                    Procedimento que deve ser realizado no mínimo 20 segundos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-amber-700">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Molhar as Mãos</h4>
                        <p className="text-sm text-slate-600">Com água morna ou fria</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-amber-700">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Aplicar Sabonete Líquido</h4>
                        <p className="text-sm text-slate-600">Quantidade suficiente para cobrir as mãos</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-amber-700">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Friccionar por 20 Segundos</h4>
                        <p className="text-sm text-slate-600">
                          Palmas, dorso, entre os dedos, unhas e pulsos. Não esquecer de nenhuma área.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-amber-700">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Enxaguar Completamente</h4>
                        <p className="text-sm text-slate-600">Remover todo o sabonete com água corrente</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-amber-700">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Secar com Papel Toalha</h4>
                        <p className="text-sm text-slate-600">Usar papel toalha descartável, nunca pano de tecido</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quando Lavar as Mãos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3 pb-4 border-b md:border-b-0">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Ao iniciar as atividades</p>
                      </div>
                    </div>
                    <div className="flex gap-3 pb-4 border-b md:border-b-0">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Após usar sanitários</p>
                      </div>
                    </div>
                    <div className="flex gap-3 pb-4 border-b md:border-b-0">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Após manipular resíduos</p>
                      </div>
                    </div>
                    <div className="flex gap-3 pb-4 border-b md:border-b-0">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Após interrupções</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Sempre que mudar de tarefa</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Quando houver risco de contaminação</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Saúde e Afastamento Sanitário</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertTitle className="text-red-900">Comunicação Obrigatória</AlertTitle>
                    <AlertDescription className="text-red-800">
                      Qualquer sintoma de doença deve ser comunicado imediatamente à gestão.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">Motivos para Afastamento Imediato:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-red-200 bg-red-50 rounded p-4">
                        <p className="font-semibold text-red-900 text-sm mb-2">Sintomas Gastrointestinais</p>
                        <p className="text-xs text-red-800">Diarreia, vômitos, dor abdominal</p>
                      </div>
                      <div className="border border-red-200 bg-red-50 rounded p-4">
                        <p className="font-semibold text-red-900 text-sm mb-2">Febre</p>
                        <p className="text-xs text-red-800">Associada a quadro infeccioso</p>
                      </div>
                      <div className="border border-red-200 bg-red-50 rounded p-4">
                        <p className="font-semibold text-red-900 text-sm mb-2">Lesões Infectadas</p>
                        <p className="text-xs text-red-800">Nas mãos ou antebraços</p>
                      </div>
                      <div className="border border-red-200 bg-red-50 rounded p-4">
                        <p className="font-semibold text-red-900 text-sm mb-2">Infecções Respiratórias</p>
                        <p className="text-xs text-red-800">Com secreção ativa</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-900 mb-3">📋 Anexo 02: Afastamento Sanitário</h4>
                    <p className="text-sm text-amber-800 mb-4">
                      Quando afastado, o formulário de afastamento sanitário deve ser preenchido com:
                    </p>
                    <ul className="space-y-2 text-sm text-amber-800">
                      <li>• Nome do colaborador e função</li>
                      <li>• Motivo do afastamento (marcar a opção correspondente)</li>
                      <li>• Data de início e retorno esperado</li>
                      <li>• Critério para retorno (ausência de sintomas, atestado médico, etc.)</li>
                      <li>• Assinatura do responsável e do colaborador</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Recebimento */}
            <TabsContent value="recebimento" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Inspeção no Recebimento de Matérias-Primas</CardTitle>
                  <CardDescription>
                    A segurança começa na chegada da matéria-prima
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Etapa Crítica</AlertTitle>
                    <AlertDescription>
                      O recebimento constitui etapa crítica para a segurança dos alimentos. É fundamental impedir a entrada de produtos impróprios, contaminados ou deteriorados.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">Checklist de Inspeção:</h4>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-3">📦 Embalagem</h5>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>✓ Integridade (sem rasgos, perfurações, amassados excessivos)</li>
                        <li>✓ Ausência de vazamentos</li>
                        <li>✓ Ausência de estufamento (conservas)</li>
                        <li>✓ Ausência de ferrugem (latas)</li>
                        <li>✓ Ausência de sinais de umidade ou mofo</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-3">🏷️ Rótulo e Identificação</h5>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>✓ Nome do fabricante</li>
                        <li>✓ CNPJ do fabricante ou importador</li>
                        <li>✓ Lista de ingredientes</li>
                        <li>✓ Informação nutricional</li>
                        <li>✓ Número de lote</li>
                        <li>✓ Data de validade</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-3">🌡️ Temperatura</h5>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>✓ Produtos refrigerados: ≤ 5°C</li>
                        <li>✓ Carnes e frios resfriados: ≤ 7°C</li>
                        <li>✓ Produtos congelados: ≤ -18°C</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-3">👃 Avaliação Sensorial</h5>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li>✓ Odor anormal</li>
                        <li>✓ Alteração de cor</li>
                        <li>✓ Textura inadequada</li>
                        <li>✓ Presença de corpos estranhos</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="font-semibold text-red-900 mb-3">❌ Rejeição Obrigatória</h4>
                    <ul className="space-y-2 text-sm text-red-800">
                      <li>• Produtos vencidos</li>
                      <li>• Embalagens violadas ou danificadas</li>
                      <li>• Temperatura fora do padrão</li>
                      <li>• Sinais de deterioração</li>
                      <li>• Rótulo ilegível ou ausente</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Anexo 01: Controle de Recebimento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600">
                    O formulário de controle de recebimento deve incluir:
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-sm text-slate-600"><strong>Data:</strong> Dia do recebimento</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-sm text-slate-600"><strong>Fornecedor:</strong> Nome da empresa</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-sm text-slate-600"><strong>Produto:</strong> Nome do produto</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-sm text-slate-600"><strong>Categoria:</strong> Matéria-prima, revenda, refrigerado ou congelado</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-sm text-slate-600"><strong>Validade:</strong> Data de vencimento</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-sm text-slate-600"><strong>Temperatura:</strong> Valor aferido (quando aplicável)</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-sm text-slate-600"><strong>Situação:</strong> Aprovado ou Rejeitado</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="text-sm text-slate-600"><strong>Responsável:</strong> Quem realizou a inspeção</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Temperatura */}
            <TabsContent value="temperatura" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Controle de Tempo e Temperatura</CardTitle>
                  <CardDescription>
                    Essencial para prevenir multiplicação de microrganismos patogênicos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">Faixas de Temperatura Seguras:</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded">
                        <h5 className="font-semibold text-blue-900 mb-2">Refrigerados</h5>
                        <p className="text-2xl font-bold text-blue-600">≤ 5°C</p>
                        <p className="text-xs text-blue-800 mt-2">Laticínios, frios, produtos prontos</p>
                      </div>

                      <div className="border-l-4 border-cyan-600 bg-cyan-50 p-4 rounded">
                        <h5 className="font-semibold text-cyan-900 mb-2">Carnes Resfriadas</h5>
                        <p className="text-2xl font-bold text-cyan-600">≤ 7°C</p>
                        <p className="text-xs text-cyan-800 mt-2">Carnes e produtos resfriados</p>
                      </div>

                      <div className="border-l-4 border-indigo-600 bg-indigo-50 p-4 rounded">
                        <h5 className="font-semibold text-indigo-900 mb-2">Congelados</h5>
                        <p className="text-2xl font-bold text-indigo-600">≤ -18°C</p>
                        <p className="text-xs text-indigo-800 mt-2">Carnes, polpas e produtos congelados</p>
                      </div>

                      <div className="border-l-4 border-orange-600 bg-orange-50 p-4 rounded">
                        <h5 className="font-semibold text-orange-900 mb-2">Alimentos Quentes</h5>
                        <p className="text-2xl font-bold text-orange-600">≥ 60°C</p>
                        <p className="text-xs text-orange-800 mt-2">Salgados e preparações aquecidas</p>
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Regra Crítica</AlertTitle>
                    <AlertDescription>
                      Alimentos perecíveis não devem permanecer fora de refrigeração por período superior a <strong>2 horas</strong>. Após esse período, devem ser descartados.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monitoramento Diário de Temperatura</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-900 mb-4">📋 Anexo 01: Controle Diário de Temperatura</h4>
                    <p className="text-sm text-amber-800 mb-4">
                      Deve ser preenchido <strong>pelo menos 1 vez ao dia</strong> para cada equipamento:
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <span className="text-amber-600 font-bold">1.</span>
                        <span className="text-sm text-amber-800"><strong>Data:</strong> Dia da verificação</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-amber-600 font-bold">2.</span>
                        <span className="text-sm text-amber-800"><strong>Equipamento:</strong> Nome (ex: Geladeira 1, Freezer, Balcão Refrigerado)</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-amber-600 font-bold">3.</span>
                        <span className="text-sm text-amber-800"><strong>Temperatura:</strong> Valor aferido no termômetro</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-amber-600 font-bold">4.</span>
                        <span className="text-sm text-amber-800"><strong>Situação:</strong> Marcar "C" (Conforme) ou "NC" (Não Conforme)</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-amber-600 font-bold">5.</span>
                        <span className="text-sm text-amber-800"><strong>Responsável:</strong> Quem realizou a verificação</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="font-semibold text-red-900 mb-3">⚠️ Se a Temperatura Estiver Fora do Padrão</h4>
                    <ol className="space-y-2 text-sm text-red-800">
                      <li className="flex gap-3">
                        <span className="font-bold">1.</span>
                        <span>Avisar imediatamente à gestão</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">2.</span>
                        <span>Verificar funcionamento do equipamento</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">3.</span>
                        <span>Avaliar se os alimentos estão seguros</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">4.</span>
                        <span>Descartar produtos que apresentem sinais de deterioração</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">5.</span>
                        <span>Acionar manutenção, se necessário</span>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 4: Contaminação Cruzada */}
            <TabsContent value="contaminacao" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Prevenção de Contaminação Cruzada</CardTitle>
                  <CardDescription>
                    Evitar transferência de microrganismos entre alimentos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Definição</AlertTitle>
                    <AlertDescription>
                      Contaminação cruzada é a transferência de contaminantes de um alimento, superfície, equipamento ou manipulador para outro alimento previamente higienizado.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">Regras Fundamentais:</h4>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h5 className="font-semibold text-green-900 mb-3">🧊 Separação no Armazenamento</h5>
                      <ul className="space-y-2 text-sm text-green-800">
                        <li>✓ Alimentos crus separados dos prontos para consumo</li>
                        <li>✓ Carnes em recipientes fechados nas prateleiras <strong>inferiores</strong></li>
                        <li>✓ Produtos prontos nas prateleiras <strong>superiores</strong></li>
                        <li>✓ Nunca armazenar alimentos diretamente no chão</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h5 className="font-semibold text-green-900 mb-3">🔪 Utensílios e Equipamentos</h5>
                      <ul className="space-y-2 text-sm text-green-800">
                        <li>✓ Nunca usar o mesmo utensílio para alimentos crus e prontos sem higienização</li>
                        <li>✓ Manter utensílios limpos e higienizados</li>
                        <li>✓ Armazenar utensílios em local protegido</li>
                        <li>✓ Usar tábuas de corte diferentes para alimentos crus e prontos</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h5 className="font-semibold text-green-900 mb-3">🧼 Higiene das Mãos</h5>
                      <ul className="space-y-2 text-sm text-green-800">
                        <li>✓ Higienizar as mãos antes e após manipular alimentos crus</li>
                        <li>✓ Evitar contato direto das mãos com alimentos prontos</li>
                        <li>✓ Usar luvas quando necessário (trocar frequentemente)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h5 className="font-semibold text-green-900 mb-3">🔄 Fluxo de Produção</h5>
                      <ul className="space-y-2 text-sm text-green-800">
                        <li>✓ Organizar o preparo de forma sequencial (alimento menos contaminado → mais contaminado)</li>
                        <li>✓ Evitar cruzamento entre alimentos sujos e limpos</li>
                        <li>✓ Não manipular dinheiro e alimentos simultaneamente</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="font-semibold text-red-900 mb-3">❌ Se Houver Contaminação Cruzada</h4>
                    <ol className="space-y-2 text-sm text-red-800">
                      <li className="flex gap-3">
                        <span className="font-bold">1.</span>
                        <span>Descartar imediatamente o alimento contaminado</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">2.</span>
                        <span>Higienizar completamente a área afetada</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">3.</span>
                        <span>Orientar o colaborador envolvido</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">4.</span>
                        <span>Registrar a ocorrência para acompanhamento</span>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Summary Card */}
          <Card className="mt-12 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-900">Resumo das Responsabilidades do Manipulador</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-900 mb-3">Antes de Começar</h4>
                  <ul className="space-y-2 text-sm text-amber-800">
                    <li>✓ Verificar saúde (sem sintomas)</li>
                    <li>✓ Lavar as mãos corretamente</li>
                    <li>✓ Usar uniforme completo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-3">Durante o Trabalho</h4>
                  <ul className="space-y-2 text-sm text-amber-800">
                    <li>✓ Manter higiene pessoal</li>
                    <li>✓ Evitar contaminação cruzada</li>
                    <li>✓ Controlar temperatura</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-3">Registros Importantes</h4>
                  <ul className="space-y-2 text-sm text-amber-800">
                    <li>✓ Assinar capacitações</li>
                    <li>✓ Comunicar afastamentos</li>
                    <li>✓ Registrar temperaturas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-3">Emergências</h4>
                  <ul className="space-y-2 text-sm text-amber-800">
                    <li>✓ Avisar gestão imediatamente</li>
                    <li>✓ Descartar alimentos suspeitos</li>
                    <li>✓ Registrar ocorrências</li>
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
