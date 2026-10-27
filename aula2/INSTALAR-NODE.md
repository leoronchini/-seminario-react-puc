# Instalando o Node.js e o npm

Para a aula de React você precisa do **Node.js**. O **npm** já vem junto com ele, não precisa instalar à parte.

Tempo: cerca de 5 minutos.

---

## 1. Veja se você já tem

Abra um terminal e rode os dois comandos:

```bash
node -v
```

```bash
npm -v
```

Como abrir o terminal:

- **Windows:** tecla `Windows`, digite `cmd` e abra o **Prompt de Comando**.
- **Mac:** `Cmd + Espaço`, digite `Terminal` e abra.

Se aparecerem números de versão (por exemplo `v24.22.1` e `11.6.0`), olhe o número do `node`:

- **v20.19 ou mais novo** (v22, v24...): está tudo certo, pule para a seção 5.
- **Mais antigo que isso:** instale de novo seguindo a seção 2 ou 3. A instalação nova substitui a antiga.
- **Mensagem de erro** como "não é reconhecido como um comando": você não tem o Node. Continue.

---

## 2. Windows

### Opção A: instalador (a mais fácil)

1. Acesse **https://nodejs.org**.
2. Clique no botão de download da versão marcada **LTS** (é a versão estável). Vai baixar um arquivo `.msi`.
3. Abra o arquivo baixado e clique em **Next** em todas as telas, aceitando a licença e **mantendo as opções que já vêm marcadas**.
4. Se aparecer uma caixa chamada **"Automatically install the necessary tools"**, deixe **desmarcada**. Não é necessária.
5. Clique em **Install** e depois em **Finish**. Se o Windows pedir permissão de administrador, aceite.
6. **Feche todos os terminais e o VS Code e abra de novo.** Isso é importante: terminais que já estavam abertos não enxergam o Node novo.

### Opção B: pelo terminal (Windows 10 e 11)

Abra o **Prompt de Comando** e rode:

```bash
winget install OpenJS.NodeJS.LTS
```

Feche e abra o terminal de novo no fim.

### Opção C: sem permissão de administrador

Use esta opção só se as duas anteriores pedirem uma senha que você não tem.

1. Em **https://nodejs.org**, procure a opção de download para **Windows** em formato **`.zip`** (aparece como "Standalone Binary").
2. Extraia o arquivo para uma pasta sua, por exemplo `C:\Users\SEUNOME\node`.
3. Em cada terminal novo, antes de usar, rode o comando abaixo (ajustando o caminho para a pasta onde está o arquivo `node.exe`):

```bash
set PATH=C:\Users\SEUNOME\node;%PATH%
```

4. Teste com `node -v`. Este ajuste vale só para aquele terminal; ao abrir outro, rode a linha de novo.

---

## 3. Mac

### Opção A: instalador

1. Acesse **https://nodejs.org**.
2. Baixe a versão **LTS** para macOS (arquivo `.pkg`).
3. Abra o arquivo e siga o instalador clicando em **Continuar**.
4. Feche e abra o Terminal de novo.

### Opção B: Homebrew (se você já usa)

```bash
brew install node
```

---

## 4. Linux

Instale o Node pelo gerenciador do seu sistema (por exemplo, `sudo apt install nodejs npm` no Ubuntu), ou siga as instruções em **https://nodejs.org**. Confira depois com `node -v`. Se a versão vier abaixo da 20.19, use o instalador do site.

---

## 5. Teste final

Em um terminal **novo**, rode:

```bash
node -v
```

```bash
npm -v
```

Os dois precisam mostrar um número de versão, e o do Node precisa ser **v20.19 ou mais novo**. Se sim, está pronto.

---

## Problemas comuns

| Sintoma | O que fazer |
|---|---|
| `node` ou `npm` "não é reconhecido" logo depois de instalar | Feche **todos** os terminais e o VS Code e abra de novo. Se continuar, reinicie o computador |
| No PowerShell, `npm` dá o erro "a execução de scripts foi desabilitada neste sistema" | Use o **Prompt de Comando** (`cmd`) no lugar do PowerShell. No VS Code: `Terminal > Novo Terminal`, clique na seta ao lado do `+` e escolha **Command Prompt** |
| O `node -v` mostra uma versão antiga depois de instalar | Havia uma instalação anterior. Feche os terminais, abra de novo e confira. Se persistir, desinstale o Node antigo em *Configurações > Aplicativos* e instale de novo |
| O instalador pede senha de administrador | Use a **Opção C** da seção 2 |
| O download não abre ou o `npm install` falha por falta de conexão | Confira a internet. Em rede de faculdade pode haver bloqueios: avise o professor |

---

## Quando terminar

Avise o professor ou mande uma captura de tela mostrando as duas versões (`node -v` e `npm -v`).
