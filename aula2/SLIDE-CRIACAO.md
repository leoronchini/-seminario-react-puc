# Criando o projeto React

* Abrir o terminal dentro da pasta onde o projeto vai ficar (crie uma pasta, por exemplo `react`; no Explorador de Arquivos clique na barra de endereço, digite `cmd` e Enter, ou abra o `cmd` e use `cd (pasta)`)
* `node -v` e `npm -v` (confere se o Node e o npm estão instalados; o Node precisa ser v20.19 ou mais novo)
* `npm config set strict-ssl false` (desativa a verificação SSL, necessária para os computadores da PUC)
* `npm create vite@latest` (cria o projeto; o terminal faz algumas perguntas, escolha com as setas ↑ ↓ e confirme com Enter)
  * `Project name:` digite `aula2` (nome da pasta do projeto)
  * `Select a framework:` escolha `React`
  * `Select a variant:` escolha `JavaScript` (não escolha TypeScript nem "React Compiler")
  * `Which linter to use?` escolha `Oxlint` (se aparecer; não muda nada na aula)
  * `Install with npm and start now?` escolha `No` (vamos instalar e executar na mão, um passo de cada vez)
* `cd aula2` (entra na pasta do projeto)
* `npm install` ou `npm i` (instala as dependências; precisa de internet e demora um pouco)
* `code .` (abre a pasta do projeto no VS Code)
* `npm run dev` (executa a aplicação que está em React; abra no navegador o endereço que aparecer, normalmente `http://localhost:5173`)
* `Ctrl + C` (para a aplicação quando terminar)
