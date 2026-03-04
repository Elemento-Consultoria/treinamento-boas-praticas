import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChevronLeft, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function GuiaAnexos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
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
              <h1 className="text-2xl font-bold text-slate-900">Guia de Preenchimento de Anexos</h1>
              <p className="text-sm text-slate-500">Instruções passo a passo para cada formulário</p>
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
              Preenchimento Correto dos Anexos
            </h2>
            <p className="text-lg text-slate-600">
              Os anexos são documentos essenciais que comprovam a execução dos Procedimentos Operacionais Padrão. Siga este guia para preencher cada um corretamente.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="capacitacao" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="capacitacao">Capacitação</TabsTrigger>
              <TabsTrigger value="higienizacao">Higienização</TabsTrigger>
              <TabsTrigger value="temperatura">Temperatura</TabsTrigger>
            </TabsList>

            {/* Tab 1: Capacitação */}
            <TabsContent value="capacitacao" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Anexo 01: Registro de Capacitação de Manipuladores</CardTitle>
                  <CardDescription>
                    POP: Higiene e Saúde dos Manipuladores
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <FileText className="h-4 w-4" />
                    <AlertTitle>Quando Preencher</AlertTitle>
                    <AlertDescription>
                      Sempre que houver treinamento em Boas Práticas com a equipe (mínimo anual ou quando houver admissão de novos colaboradores).
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">Campos Obrigatórios:</h4>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h5 className="font-semibold text-purple-900 mb-4">Seção 1: Dados do Treinamento</h5>
                      <div className="space-y-4">
                        <div className="border-l-4 border-purple-600 pl-4">
                          <p className="font-semibold text-slate-900">Título/Tema</p>
                          <p className="text-sm text-slate-600 mt-1">
                            Escreva: "Higiene e saúde dos manipuladores de alimentos"
                          </p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                          <p className="font-semibold text-slate-900">Data</p>
                          <p className="text-sm text-slate-600 mt-1">
                            Dia, mês e ano em que o treinamento foi realizado (formato: DD/MM/AAAA)
                          </p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                          <p className="font-semibold text-slate-900">Carga Horária</p>
                          <p className="text-sm text-slate-600 mt-1">
                            Quantas horas durou o treinamento (ex: 2 horas)
                          </p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                          <p className="font-semibold text-slate-900">Responsável Técnico/Instrutor</p>
                          <p className="text-sm text-slate-600 mt-1">
                            Nome completo de quem conduziu o treinamento
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h5 className="font-semibold text-purple-900 mb-4">Seção 2: Conteúdo Abordado</h5>
                      <p className="text-sm text-purple-800 mb-4">
                        Marque com um "X" ou "✓" os tópicos que foram abordados no treinamento:
                      </p>
                      <div className="space-y-2 text-sm text-purple-800">
                        <div className="flex gap-3">
                          <span>☐</span>
                          <span>Higiene pessoal</span>
                        </div>
                        <div className="flex gap-3">
                          <span>☐</span>
                          <span>Lavagem correta das mãos</span>
                        </div>
                        <div className="flex gap-3">
                          <span>☐</span>
                          <span>Uso correto de uniformes</span>
                        </div>
                        <div className="flex gap-3">
                          <span>☐</span>
                          <span>Proibição de adornos</span>
                        </div>
                        <div className="flex gap-3">
                          <span>☐</span>
                          <span>Condições de saúde e afastamento</span>
                        </div>
                        <div className="flex gap-3">
                          <span>☐</span>
                          <span>Condutas proibidas na área de manipulação</span>
                        </div>
                        <div className="flex gap-3">
                          <span>☐</span>
                          <span>Prevenção de contaminação cruzada</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h5 className="font-semibold text-purple-900 mb-4">Seção 3: Lista de Participantes</h5>
                      <p className="text-sm text-purple-800 mb-4">
                        Criar uma tabela com:
                      </p>
                      <div className="space-y-2 text-sm text-purple-800">
                        <div className="flex gap-3">
                          <span className="font-bold">N°</span>
                          <span>Número sequencial (1, 2, 3...)</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-bold">Nome</span>
                          <span>Nome completo do colaborador</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-bold">Função</span>
                          <span>Cargo (ex: Manipulador, Limpeza)</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-bold">Assinatura</span>
                          <span>Assinatura do participante</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h5 className="font-semibold text-purple-900 mb-4">Seção 4: Declaração Final</h5>
                      <p className="text-sm text-purple-800 mb-3">
                        Preencher com:
                      </p>
                      <div className="space-y-2 text-sm text-purple-800">
                        <div className="flex gap-3">
                          <span className="font-bold">Responsável:</span>
                          <span>Nome de quem conduziu o treinamento</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-bold">Assinatura:</span>
                          <span>Assinatura do responsável</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-bold">Data:</span>
                          <span>DD/MM/AAAA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Anexo 02: Registro de Afastamento Sanitário</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <FileText className="h-4 w-4" />
                    <AlertTitle>Quando Preencher</AlertTitle>
                    <AlertDescription>
                      Quando um colaborador apresentar sintomas de doença e precisar ser afastado das atividades de manipulação.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-4">Seção 1: Identificação</h5>
                      <div className="space-y-3 text-sm text-blue-800">
                        <div>
                          <p className="font-semibold">Nome do Colaborador</p>
                          <p>Nome completo</p>
                        </div>
                        <div>
                          <p className="font-semibold">Função</p>
                          <p>Cargo do colaborador</p>
                        </div>
                        <div>
                          <p className="font-semibold">Data da Comunicação</p>
                          <p>Quando o afastamento foi comunicado</p>
                        </div>
                        <div>
                          <p className="font-semibold">Responsável pelo Registro</p>
                          <p>Quem preencheu este formulário</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-4">Seção 2: Motivo do Afastamento</h5>
                      <p className="text-sm text-blue-800 mb-3">
                        Marcar a opção que corresponde ao motivo:
                      </p>
                      <div className="space-y-2 text-sm text-blue-800">
                        <div>☐ Sintomas gastrointestinais (diarreia, vômito)</div>
                        <div>☐ Febre</div>
                        <div>☐ Lesões ou ferimentos expostos</div>
                        <div>☐ Infecção cutânea</div>
                        <div>☐ Doença infectocontagiosa</div>
                        <div>☐ Apresentação de atestado médico</div>
                        <div>☐ Outro (especificar)</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-4">Seção 3: Medida Sanitária Adotada</h5>
                      <p className="text-sm text-blue-800 mb-3">
                        Marcar a ação tomada:
                      </p>
                      <div className="space-y-2 text-sm text-blue-800">
                        <div>☐ Afastamento imediato das atividades</div>
                        <div>☐ Remanejamento para atividade sem contato com alimentos</div>
                        <div>☐ Orientação e monitoramento interno</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-4">Seção 4: Critério para Retorno</h5>
                      <p className="text-sm text-blue-800 mb-3">
                        Marcar quando o colaborador pode retornar:
                      </p>
                      <div className="space-y-2 text-sm text-blue-800">
                        <div>☐ Ausência total de sintomas</div>
                        <div>☐ Apresentação de atestado médico</div>
                        <div>☐ Avaliação interna do responsável técnico</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Higienização */}
            <TabsContent value="higienizacao" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Anexo 01: Controle Mensal de Higienização</CardTitle>
                  <CardDescription>
                    POP: Higienização de Instalações, Equipamentos e Utensílios
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <FileText className="h-4 w-4" />
                    <AlertTitle>Preenchimento Diário</AlertTitle>
                    <AlertDescription>
                      Este anexo é preenchido continuamente ao longo do mês, com tarefas diárias, semanais e mensais.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                      <h5 className="font-semibold text-emerald-900 mb-4">Cabeçalho</h5>
                      <div className="space-y-3 text-sm text-emerald-800">
                        <div>
                          <p className="font-semibold">Mês/Ano</p>
                          <p>Exemplo: Março/2026</p>
                        </div>
                        <div>
                          <p className="font-semibold">Responsável pelo Preenchimento</p>
                          <p>Nome de quem preenche diariamente</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                      <h5 className="font-semibold text-emerald-900 mb-4">Legenda</h5>
                      <div className="space-y-2 text-sm text-emerald-800">
                        <div className="flex gap-3">
                          <span className="font-bold">✓</span>
                          <span>= Realizado conforme POP</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-bold">X</span>
                          <span>= Não realizado / Não conforme</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                      <h5 className="font-semibold text-emerald-900 mb-4">Bloco 1: Atividades Diárias</h5>
                      <p className="text-sm text-emerald-800 mb-3">
                        Preencher para cada dia da semana (Seg-Dom):
                      </p>
                      <div className="space-y-2 text-sm text-emerald-800">
                        <div>• Bancadas</div>
                        <div>• Utensílios</div>
                        <div>• Piso Produção</div>
                        <div>• Balcão</div>
                        <div>• Sanitário</div>
                        <div>• Solução Preparada</div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                      <h5 className="font-semibold text-emerald-900 mb-4">Bloco 2: Atividades Semanais</h5>
                      <p className="text-sm text-emerald-800 mb-3">
                        Preencher uma vez por semana (4 semanas no mês):
                      </p>
                      <div className="space-y-2 text-sm text-emerald-800">
                        <div>• Geladeira interna</div>
                        <div>• Ralos</div>
                        <div>• Paredes</div>
                        <div>• Prateleiras</div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                      <h5 className="font-semibold text-emerald-900 mb-4">Bloco 3: Atividades Mensais</h5>
                      <p className="text-sm text-emerald-800 mb-3">
                        Preencher uma vez por mês:
                      </p>
                      <div className="space-y-2 text-sm text-emerald-800">
                        <div>• Teto (com data e responsável)</div>
                        <div>• Luminárias (com data e responsável)</div>
                        <div>• Exaustores (com data e responsável)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Anexo 02: Controle de Preparo da Solução Clorada</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <FileText className="h-4 w-4" />
                    <AlertTitle>Preenchimento Diário</AlertTitle>
                    <AlertDescription>
                      Uma nova solução deve ser preparada a cada dia. Máximo 24 horas de validade.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                      <h5 className="font-semibold text-emerald-900 mb-4">Campos a Preencher</h5>
                      <div className="space-y-3 text-sm text-emerald-800">
                        <div className="border-l-4 border-emerald-600 pl-4">
                          <p className="font-semibold">Data</p>
                          <p>Dia em que a solução foi preparada (DD/MM/AAAA)</p>
                        </div>
                        <div className="border-l-4 border-emerald-600 pl-4">
                          <p className="font-semibold">Horário</p>
                          <p>Hora exata do preparo (HH:MM)</p>
                        </div>
                        <div className="border-l-4 border-emerald-600 pl-4">
                          <p className="font-semibold">Produto</p>
                          <p>Nome do produto clorado utilizado (ex: Cloro Comercial)</p>
                        </div>
                        <div className="border-l-4 border-emerald-600 pl-4">
                          <p className="font-semibold">Responsável</p>
                          <p>Nome de quem preparou a solução</p>
                        </div>
                        <div className="border-l-4 border-emerald-600 pl-4">
                          <p className="font-semibold">Concentração (mL/L)</p>
                          <p>Quantidade de cloro por litro de água (ex: 100 mL/L)</p>
                        </div>
                        <div className="border-l-4 border-emerald-600 pl-4">
                          <p className="font-semibold">Conferência do Rótulo</p>
                          <p>Marcar se o produto está dentro do prazo de validade</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h5 className="font-semibold text-red-900 mb-3">⚠️ Observações Importantes</h5>
                      <ul className="space-y-2 text-sm text-red-800">
                        <li>• Validade máxima: 24 horas</li>
                        <li>• Descartar se ficar turva ou descolorida</li>
                        <li>• Preparar uma nova solução a cada dia</li>
                        <li>• Usar apenas produtos com registro na ANVISA</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 3: Temperatura */}
            <TabsContent value="temperatura" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Anexo 01: Controle Diário de Temperatura</CardTitle>
                  <CardDescription>
                    POP: Controle de Tempo e Temperatura
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <FileText className="h-4 w-4" />
                    <AlertTitle>Preenchimento Diário</AlertTitle>
                    <AlertDescription>
                      Deve ser preenchido pelo menos uma vez ao dia para cada equipamento de refrigeração.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-4">Colunas da Planilha</h5>
                      <div className="space-y-3 text-sm text-blue-800">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <p className="font-semibold">Data</p>
                          <p>Dia da verificação (DD/MM/AAAA)</p>
                        </div>
                        <div className="border-l-4 border-blue-600 pl-4">
                          <p className="font-semibold">Equipamento</p>
                          <p>Nome do equipamento (ex: Geladeira 1, Freezer, Balcão Refrigerado)</p>
                        </div>
                        <div className="border-l-4 border-blue-600 pl-4">
                          <p className="font-semibold">Temperatura</p>
                          <p>Valor aferido no termômetro (ex: 4°C, -18°C)</p>
                        </div>
                        <div className="border-l-4 border-blue-600 pl-4">
                          <p className="font-semibold">Situação</p>
                          <p>Marcar "C" (Conforme) ou "NC" (Não Conforme)</p>
                        </div>
                        <div className="border-l-4 border-blue-600 pl-4">
                          <p className="font-semibold">Responsável</p>
                          <p>Nome de quem realizou a verificação</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h5 className="font-semibold text-blue-900 mb-4">Exemplo de Preenchimento</h5>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-blue-800">
                          <thead>
                            <tr className="border-b border-blue-300">
                              <th className="text-left p-2">Data</th>
                              <th className="text-left p-2">Equipamento</th>
                              <th className="text-left p-2">Temp.</th>
                              <th className="text-left p-2">Situação</th>
                              <th className="text-left p-2">Responsável</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-blue-200">
                              <td className="p-2">04/03/2026</td>
                              <td className="p-2">Geladeira 1</td>
                              <td className="p-2">4°C</td>
                              <td className="p-2">C</td>
                              <td className="p-2">Maria</td>
                            </tr>
                            <tr className="border-b border-blue-200">
                              <td className="p-2">04/03/2026</td>
                              <td className="p-2">Freezer</td>
                              <td className="p-2">-18°C</td>
                              <td className="p-2">C</td>
                              <td className="p-2">Maria</td>
                            </tr>
                            <tr>
                              <td className="p-2">04/03/2026</td>
                              <td className="p-2">Balcão Ref.</td>
                              <td className="p-2">6°C</td>
                              <td className="p-2">NC</td>
                              <td className="p-2">Maria</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h5 className="font-semibold text-red-900 mb-3">⚠️ Se Marcar "NC" (Não Conforme)</h5>
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
                          <span>Descartar produtos deteriorados</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold">5.</span>
                          <span>Acionar manutenção, se necessário</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Faixas de Temperatura Seguras</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded">
                      <p className="font-semibold text-blue-900">Refrigerados</p>
                      <p className="text-2xl font-bold text-blue-600 mt-2">≤ 5°C</p>
                      <p className="text-xs text-blue-800 mt-2">Laticínios, frios, produtos prontos</p>
                    </div>
                    <div className="border-l-4 border-cyan-600 bg-cyan-50 p-4 rounded">
                      <p className="font-semibold text-cyan-900">Carnes Resfriadas</p>
                      <p className="text-2xl font-bold text-cyan-600 mt-2">≤ 7°C</p>
                      <p className="text-xs text-cyan-800 mt-2">Carnes e produtos resfriados</p>
                    </div>
                    <div className="border-l-4 border-indigo-600 bg-indigo-50 p-4 rounded">
                      <p className="font-semibold text-indigo-900">Congelados</p>
                      <p className="text-2xl font-bold text-indigo-600 mt-2">≤ -18°C</p>
                      <p className="text-xs text-indigo-800 mt-2">Carnes, polpas, congelados</p>
                    </div>
                    <div className="border-l-4 border-orange-600 bg-orange-50 p-4 rounded">
                      <p className="font-semibold text-orange-900">Alimentos Quentes</p>
                      <p className="text-2xl font-bold text-orange-600 mt-2">≥ 60°C</p>
                      <p className="text-xs text-orange-800 mt-2">Salgados, preparações aquecidas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Summary Card */}
          <Card className="mt-12 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-900">Dicas Importantes para Preenchimento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-900">Letra Legível</p>
                    <p className="text-sm text-purple-800">Escreva com letra clara para que qualquer pessoa consiga ler</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-900">Datas Completas</p>
                    <p className="text-sm text-purple-800">Sempre no formato DD/MM/AAAA para evitar confusões</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-900">Sem Rasuras</p>
                    <p className="text-sm text-purple-800">Se errar, risque com uma linha e escreva ao lado. Nunca use corretivo</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-900">Assinatura</p>
                    <p className="text-sm text-purple-800">Sempre assine ou coloque suas iniciais nos campos solicitados</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-900">Preenchimento Diário</p>
                    <p className="text-sm text-purple-800">Preencha no mesmo dia das atividades, não deixe para depois</p>
                  </div>
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
