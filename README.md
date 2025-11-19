===============================================
  GUIA DE INSTALACAO - PROJETO PAPERLESS
===============================================

PROJETO: Paperless (Angular 19 + TypeScript + Material Design)
TIPO: Frontend Web Application
TECNOLOGIA: Node.js + Angular CLI
GERENCIADOR: npm (Node Package Manager)

===============================================
             PRE-REQUISITOS
===============================================

1. NODE.JS (OBRIGATORIO)
   - Download: https://nodejs.org/
   - Versao necessaria: v20.x ou v22.x (LTS - Long Term Support)
   - O instalador ja inclui o npm automaticamente
   
   INSTALACAO WINDOWS:
   a) Baixe o instalador .msi
   b) Execute e siga o wizard
   c) Aceite todas as opcoes padrao
   d) Marque "Automatically install necessary tools"
   e) Clique em Install e aguarde
   f) Reinicie o computador apos instalacao

   INSTALACAO LINUX/MAC:
   - Siga as instrucoes no site oficial
   - Use nvm (Node Version Manager) para facilitar

2. VERIFICAR INSTALACAO NODE.JS
   Abra o terminal (CMD/PowerShell/Terminal) e execute:
   
   node --version
   (deve mostrar: v20.x.x ou v22.x.x)
   
   npm --version
   (deve mostrar: 10.x.x ou superior)

===============================================
          INSTALACAO PASSO A PASSO
===============================================

PASSO 1: INSTALAR ANGULAR CLI (GLOBAL)
---------------------------------------
Abra o terminal e execute:

npm install -g @angular/cli

EXPLICACAO:
- "npm" = gerenciador de pacotes do Node.js
- "install" = comando para instalar
- "-g" = global (instala para todo o sistema)
- "@angular/cli" = ferramenta de linha de comando do Angular

TEMPO ESTIMADO: 2-3 minutos

VERIFICAR INSTALACAO:
ng version
(deve mostrar: Angular CLI: 19.x.x)


PASSO 2: BAIXAR/CLONAR O PROJETO
---------------------------------
Se o projeto estiver no Git:
git clone https://github.com/seu-usuario/paperless.git
cd paperless

Se baixou em arquivo .zip:
- Extraia o arquivo
- Abra o terminal na pasta extraida


PASSO 3: INSTALAR DEPENDENCIAS DO PROJETO
------------------------------------------
DENTRO da pasta do projeto, execute:

npm install

OU, se houver erros de compatibilidade:

npm install --legacy-peer-deps

O QUE ESSE COMANDO FAZ:
- Le o arquivo package.json (lista de dependencias)
- Baixa TODAS as bibliotecas necessarias
- Cria a pasta node_modules (milhares de arquivos)
- Instala Angular Material, RxJS e todas as dependencias

TEMPO ESTIMADO: 3-5 minutos (depende da internet)

TAMANHO TOTAL: ~500MB-1GB


PASSO 4: EXECUTAR O PROJETO
----------------------------
Ainda na pasta do projeto, execute:

ng serve

OU para abrir automaticamente no navegador:

ng serve --open

OU para usar outra porta:

ng serve --port 4300

AGUARDE A MENSAGEM:
"Browser application bundle generation complete."
"Compiled successfully."
"Angular Live Development Server is listening on localhost:4200"

ACESSE NO NAVEGADOR:
http://localhost:4200

PARA PARAR O SERVIDOR:
Pressione Ctrl + C no terminal

===============================================
           LISTA DE DEPENDENCIAS
===============================================


PRINCIPAIS PACOTES (instalados automaticamente pelo npm install):

ANGULAR CORE:
- @angular/animations: versao 19.0.0
- @angular/common: versao 19.0.0
- @angular/compiler: versao 19.0.0
- @angular/core: versao 19.0.0
- @angular/forms: versao 19.0.0
- @angular/platform-browser: versao 19.0.0
- @angular/platform-browser-dynamic: versao 19.0.0
- @angular/router: versao 19.0.0

ANGULAR MATERIAL (UI):
- @angular/material: versao 19.0.0
- @angular/cdk: versao 19.0.0 (Component Dev Kit)

UTILITARIOS:
- rxjs: versao 7.8.0 (Programacao reativa)
- tslib: versao 2.3.0 (TypeScript helpers)
- zone.js: versao 0.14.2 (Change detection)

DESENVOLVIMENTO:
- @angular/cli: versao 19.0.0
- @angular/compiler-cli: versao 19.0.0
- typescript: versao 5.5.2
- @types/jasmine: versao 5.1.0 (Testes)

TOTAL DE PACOTES: ~1500+ (incluindo dependencias transitivas)

===============================================
         COMANDOS UTEIS
===============================================


BASICOS:
--------
npm install                 # Instala todas as dependencias
ng serve                    # Inicia servidor de desenvolvimento
ng serve --open            # Inicia e abre no navegador
ng serve --port 4300       # Usa porta diferente
ng build                   # Compila para producao
ng test                    # Executa testes unitarios

GERACAO DE CODIGO:
------------------
ng generate component nome       # Cria novo componente
ng generate service nome         # Cria novo service
ng generate module nome          # Cria novo modulo
ng g c nome                      # Atalho para componente
ng g s nome                      # Atalho para service

MANUTENCAO:
-----------
ng cache clean                   # Limpa cache do Angular
npm cache clean --force          # Limpa cache do npm
ng update @angular/cli @angular/core  # Atualiza Angular
npm outdated                     # Verifica pacotes desatualizados

===============================================
               SOLUCAO DE PROBLEMAS
===============================================

ERRO: "node: command not found" ou "npm: command not found"
SOLUCAO: Node.js nao esta instalado. Instale do site nodejs.org


ERRO: "ng: command not found" ou "ng nao e reconhecido"
SOLUCAO: Angular CLI nao foi instalado globalmente
EXECUTE: npm install -g @angular/cli


ERRO: "Port 4200 is already in use"
SOLUCAO: Porta ja esta em uso por outro processo
OPCAO 1: Feche o outro processo que usa a porta
OPCAO 2: Use outra porta: ng serve --port 4300


ERRO: "npm ERR! peer dependency" ou "ERESOLVE unable to resolve"
SOLUCAO: Conflito de versoes de dependencias
EXECUTE: npm install --legacy-peer-deps


ERRO: "Error: EACCES: permission denied" (Linux/Mac)
SOLUCAO: Problemas de permissao
EXECUTE: sudo npm install -g @angular/cli


ERRO: Projeto nao compila ou erros estranhos
SOLUCAO: Cache corrompido ou node_modules com problema
PASSO 1: ng cache clean
PASSO 2: Delete a pasta node_modules
PASSO 3: Delete o arquivo package-lock.json
PASSO 4: npm install --legacy-peer-deps
PASSO 5: ng serve


ERRO: Pagina em branco no navegador
SOLUCAO: Verifique o console do navegador (F12)
- Veja se ha erros de JavaScript
- Verifique se todas as dependencias foram instaladas
- Tente limpar o cache do navegador (Ctrl+Shift+Delete)

===============================================
      FERRAMENTAS RECOMENDADAS (OPCIONAL)
===============================================

1. VISUAL STUDIO CODE
   - Download: https://code.visualstudio.com/
   - Editor de codigo mais usado para Angular
   - Gratuito e open source

2. EXTENSOES VS CODE UTEIS:
   - Angular Language Service (por Angular)
   - Angular Snippets (por John Papa)
   - Prettier - Code formatter
   - ESLint
   - Auto Rename Tag
   - Bracket Pair Colorizer
   - GitLens

3. GIT (CONTROLE DE VERSAO)
   - Download: https://git-scm.com/downloads
   - Necessario para clonar repositorios
   - Usado para versionamento de codigo

4. NAVEGADORES RECOMENDADOS:
   - Google Chrome (melhor suporte a developer tools)
   - Microsoft Edge (baseado em Chromium)
   - Firefox Developer Edition

===============================================
            ESTRUTURA DO PROJETO
===============================================


paperless/
├── node_modules/           # Dependencias (nao versionar no Git)
├── src/                    # Codigo fonte
│   ├── app/               # Aplicacao Angular
│   │   ├── components/    # Componentes (login, menu, upload, etc)
│   │   ├── service/       # Servicos (API, autenticacao)
│   │   ├── app.component.ts
│   │   ├── app.routes.ts  # Configuracao de rotas
│   │   └── app.config.ts  # Configuracao do app
│   ├── assets/            # Arquivos estaticos (imagens, etc)
│   ├── environments/      # Variaveis de ambiente
│   ├── index.html         # HTML principal
│   ├── main.ts            # Ponto de entrada
│   └── styles.scss        # Estilos globais
├── angular.json           # Configuracao do Angular CLI
├── package.json           # Lista de dependencias (IMPORTANTE!)
├── package-lock.json      # Lock de versoes exatas
├── tsconfig.json          # Configuracao do TypeScript
└── README.md              # Documentacao do projeto

ARQUIVOS IMPORTANTES:
- package.json: Lista TODAS as dependencias necessarias
- angular.json: Configuracoes de build e serve
- tsconfig.json: Configuracoes do TypeScript

PASTAS A IGNORAR NO GIT:
- node_modules/
- dist/
- .angular/

===============================================
         WORKFLOW DE DESENVOLVIMENTO
===============================================

1. PRIMEIRA VEZ (SETUP INICIAL):
   - Instalar Node.js
   - Instalar Angular CLI
   - Clonar/baixar projeto
   - npm install
   - ng serve

2. DIA A DIA (DESENVOLVIMENTO):
   - Abrir terminal na pasta do projeto
   - ng serve
   - Desenvolver codigo
   - Testar no navegador (localhost:4200)
   - Ctrl+C para parar

3. ANTES DE COMMITAR (GIT):
   - ng build (verificar se compila)
   - ng test (executar testes)
   - git add .
   - git commit -m "mensagem"
   - git push

4. DEPLOY PARA PRODUCAO:
   - ng build --configuration production
   - Pasta dist/ contem arquivos prontos
   - Enviar para servidor/hosting

===============================================
        COMANDOS DE INSTALACAO RAPIDA
===============================================


COPIE E COLE NO TERMINAL (WINDOWS):
------------------------------------
node --version
npm install -g @angular/cli
npm install --legacy-peer-deps
ng serve --open


COPIE E COLE NO TERMINAL (LINUX/MAC):
--------------------------------------
node --version
npm install -g @angular/cli
npm install --legacy-peer-deps
ng serve --open

===============================================
           CHECKLIST DE INSTALACAO
===============================================

[ ] Node.js instalado (verificar: node --version)
[ ] npm funcionando (verificar: npm --version)
[ ] Angular CLI instalado globalmente (verificar: ng version)
[ ] Projeto baixado/clonado
[ ] Terminal aberto na pasta do projeto
[ ] Dependencias instaladas (npm install concluido)
[ ] Pasta node_modules criada
[ ] Servidor rodando (ng serve executado)
[ ] Navegador abrindo em localhost:4200
[ ] Login/menu/upload funcionando

==============================================
              INFORMACOES ADICIONAIS
==============================================

TEMPO TOTAL DE INSTALACAO: 10-15 minutos

ESPACO EM DISCO NECESSARIO:
- Node.js: ~200MB
- Angular CLI: ~50MB
- Projeto (node_modules): ~500MB-1GB
- Total: ~1-1.5GB

REQUISITOS DE SISTEMA:
- Windows 10/11, macOS 10.15+, ou Linux
- 4GB RAM minimo (8GB recomendado)
- Conexao com internet para downloads
- 2GB de espaco livre em disco

VERSOES TESTADAS:
- Node.js: v20.11.0, v22.2.0
- npm: v10.2.4, v10.7.0
- Angular CLI: v19.0.0
- Angular: v19.0.0

COMPATIBILIDADE:
- Navegadores modernos (Chrome 90+, Firefox 88+, Edge 90+)
- Suporte a ES2020+
- TypeScript 5.5+

DOCUMENTACAO OFICIAL:
- Angular: https://angular.dev/
- Node.js: https://nodejs.org/docs/
- npm: https://docs.npmjs.com/
- TypeScript: https://www.typescriptlang.org/docs/

SUPORTE:
- GitHub Issues do projeto
- Stack Overflow (tag: angular)
- Angular Discord Community

===============================================
            NOTAS IMPORTANTES
===============================================


1. NAO DELETE A PASTA node_modules MANUALMENTE
   - Use npm install para recria-la se necessario

2. NAO VERSIONE node_modules NO GIT
   - Adicione ao .gitignore
   - Use package.json para compartilhar dependencias

3. SEMPRE USE npm install APOS CLONAR PROJETO
   - O package.json contem todas as dependencias
   - node_modules nao e versionado

4. MANTENHA Node.js E Angular CLI ATUALIZADOS
   - Verifique updates regularmente
   - Use ng update para atualizar Angular

5. ESTE NAO E UM PROJETO PYTHON
   - Nao use pip ou requirements.txt
   - Use npm e package.json

===============================================
                FIM DO GUIA DE INSTALACAO
===============================================

Para duvidas ou problemas, consulte a documentacao oficial do Angular em:
https://angular.dev/

Desenvolvido com: Angular 19 + TypeScript + Material Design + AWS Integration

Data: Novembro 2025
Versao do guia: 1.0
