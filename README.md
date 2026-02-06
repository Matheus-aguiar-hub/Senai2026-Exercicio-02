# 📌 Simulador de Compras com Juros Compostos

## 📖 Descrição do Projeto
Este projeto consiste em um **simulador de compras com juros compostos**, desenvolvido como atividade prática acadêmica no início do semestre de **Back-end**, sob orientação do professor **Marcel Teixeira**.

O sistema permite que o usuário escolha o prazo de parcelamento em **anos ou meses**, realizando a **conversão automática** e exibindo um **comprovante final da simulação**, com foco na experiência do usuário via terminal e na integridade dos dados.

---

## 🎯 Objetivo
Criar um sistema capaz de simular compras parceladas utilizando juros compostos, aplicando regras de negócio reais, validações de dados e boa organização de código.

---

## 🧮 Fórmula Utilizada
O cálculo dos juros compostos é realizado com a seguinte fórmula:

M = C × (1 + i)ⁿ


A fórmula foi implementada em **JavaScript**, utilizando o operador de exponenciação `**`.

---

## ⚙️ Funcionalidades
- Conversão automática do prazo conforme a escolha do usuário (anos ou meses)
- Validação de entradas do usuário
- Geração de comprovante com os dados da simulação
- Execução do sistema via terminal

---

## 🛡️ Validações Implementadas
O sistema realiza verificações para garantir:
- Bloqueio de letras em campos numéricos
- Verificação de valores inválidos
- Tratamento de campos vazios
- Segurança dos dados
- Consistência das informações inseridas
- Funcionamento correto das regras de negócio

---

## 📝 Padronização e Boas Práticas
O código segue um padrão de comentários no início do arquivo, contendo:
- Objetivo do programa
- Data de criação
- Autor
- Versão do arquivo

Esse padrão facilita a **manutenção**, **organização** e o **entendimento do código por outros desenvolvedores**, sendo reutilizado em projetos futuros.

---

## 🧠 Aprendizados
- Base sólida em lógica aplicada ao back-end
- Importância da validação para segurança e confiabilidade
- Desenvolvimento do pensamento lógico voltado à resolução de problemas reais
- Leitura, interpretação e implementação de regras de negócio
- Boas práticas de documentação de código

---

## 🛠️ Tecnologias Utilizadas
- JavaScript
- Visual Studio Code
- Execução via terminal

---

## ▶️ Como Executar o Projeto
1. Clone este repositório
2. Abra o projeto no Visual Studio Code
3. Execute o arquivo principal pelo terminal

Exemplo:
```bash
node app.js
