# Treinamento em Boas Práticas

**Plataforma interativa de treinamento para Procedimentos Operacionais Padrão (POPs) e segurança dos alimentos**

## 📋 Sobre o Projeto

Este site foi desenvolvido para facilitar o treinamento da equipe sobre Boas Práticas e Procedimentos Operacionais Padrão (POPs) de uma panificadora. A plataforma é dividida em três módulos específicos, cada um direcionado a um profissional diferente do estabelecimento.

**Empresa:** Gedeão Antônio da Silva  
**CNPJ:** 10.626.628/0001-50  
**Localização:** Cachoeiro de Itapemirim – ES

## 🎯 Módulos de Treinamento

### 1. **Módulo Gestora** - Responsabilidade e Supervisão
Destinado à gestora do estabelecimento. Aborda:
- Validação de registros e documentos
- Gestão de não conformidades
- Controle de pragas
- Supervisão de POPs
- Anexos: Capacitação, Afastamento Sanitário, Controle de Temperatura

### 2. **Módulo Limpeza** - Higienização e Resíduos
Destinado ao responsável pela limpeza. Inclui:
- Higienização de instalações, equipamentos e utensílios
- Frequências de limpeza (diária, semanal, mensal)
- Preparo correto de solução clorada
- Manejo de resíduos
- Anexos: Controle Mensal de Higienização, Preparo de Solução Clorada

### 3. **Módulo Panificação** - Produção e Controle
Destinado ao responsável pela panificação. Cobre:
- Higiene pessoal e saúde do manipulador
- Lavagem correta das mãos
- Recebimento e controle de temperatura
- Prevenção de contaminação cruzada
- Anexos: Capacitação, Afastamento Sanitário, Controle de Temperatura

### 4. **Guia de Anexos** - Instruções de Preenchimento
Seção adicional com:
- Demonstração prática de preenchimento de formulários
- Exemplos de documentos corretos
- Dúvidas frequentes
- Próximos passos para implementação

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Componentes:** shadcn/ui
- **Roteamento:** Wouter
- **Build:** Vite
- **Hospedagem:** GitHub Pages
- **CI/CD:** GitHub Actions

## 📦 Estrutura do Projeto

```
treinamento-boas-praticas/
├── client/
│   ├── src/
│   │   ├── pages/          # Páginas dos módulos
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── App.tsx         # Roteamento principal
│   │   └── index.css       # Estilos globais
│   ├── public/             # Arquivos estáticos
│   └── index.html          # Template HTML
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions para deploy
├── package.json            # Dependências do projeto
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### Acesso Online
Acesse o site diretamente em: **[Link do GitHub Pages]**

### Desenvolvimento Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Elemento-Consultoria/treinamento-boas-praticas.git
   cd treinamento-boas-praticas
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm run dev
   ```

4. **Abra no navegador:**
   ```
   http://localhost:5173
   ```

5. **Build para produção:**
   ```bash
   pnpm run build
   ```

## 📖 Conteúdo dos POPs

O site aborda os seguintes Procedimentos Operacionais Padrão:

- **POP 01:** Higiene e Saúde dos Manipuladores
- **POP 02:** Higienização de Instalações, Equipamentos, Móveis e Utensílios
- **POP 03:** Controle de Tempo e Temperatura

Cada POP inclui:
- Descrição detalhada do procedimento
- Frequência de execução
- Responsáveis
- Anexos para registro e rastreabilidade
- Instruções de preenchimento

## 📋 Anexos Disponíveis

1. **Anexo 01 - Registro de Capacitação de Manipuladores**
   - Documenta treinamentos realizados
   - Assinatura do colaborador
   - Data e responsável

2. **Anexo 02 - Registro de Afastamento Sanitário**
   - Registra afastamentos por motivos de saúde
   - Motivo do afastamento
   - Período de ausência

3. **Anexo 01 - Controle Mensal de Higienização**
   - Acompanhamento diário, semanal e mensal
   - Marcação de conformidade (✓) ou não conformidade (X)
   - Assinatura do responsável

4. **Anexo 02 - Preparo da Solução Clorada**
   - Data e hora do preparo
   - Produto utilizado
   - Concentração da solução
   - Validade máxima de 24 horas

5. **Anexo 01 - Controle Diário de Temperatura**
   - Monitoramento de equipamentos refrigerados
   - Registros de temperatura
   - Ações corretivas quando necessário

## ✅ Checklist de Implementação

- [x] Estrutura do site com 5 páginas
- [x] Módulos específicos para cada profissional
- [x] Conteúdo detalhado dos POPs
- [x] Instruções de preenchimento de anexos
- [x] Design responsivo e profissional
- [x] GitHub Actions configurado
- [x] GitHub Pages ativado
- [ ] Treinamento da equipe
- [ ] Revisão mensal dos registros

## 📞 Suporte e Dúvidas

Para dúvidas sobre o conteúdo dos POPs ou preenchimento dos anexos, consulte:
- A seção "Guia de Anexos" no site
- O manual de boas práticas completo
- A gestora do estabelecimento

## 📄 Licença

Este projeto foi desenvolvido especificamente para Gedeão Antônio da Silva e está protegido por direitos autorais.

## 🔗 Links Úteis

- **Repositório GitHub:** https://github.com/Elemento-Consultoria/treinamento-boas-praticas
- **Site Ativo:** [Link do GitHub Pages]
- **CNPJ:** 10.626.628/0001-50

---

**Desenvolvido com ❤️ para garantir a segurança dos alimentos e a qualidade operacional**

*Última atualização: Março de 2026*
