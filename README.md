# BluehunterDesafioFrontend
Link do desafio: https://github.com/mpguedes/blue-hunter

## Justificativas técnicas
- Utilizado a framework angular versão 4.0 conforme requisitado no desafio,
- Utilizado o pré-processador less conforme requisitado no desafio
- Separei as diversas classes em services, models e mocks em suas determinadas pastas para melhorar a organização do código

## Instruções de uso
Antes de poder fazer a execução, build ou deploy da aplicação é necessário ter instalado o cli do angular de maneira global em sua máquina, para instalar ele é só usar o comando npm i -g @angular/cli (mais informações do cli em https://cli.angular.io/)

### Execução
Para executar o site em modo de desenvolvimento é só usar o comando ```ng serve```, que abrirá um servidor http local na porta 4200 com auto-reloading após salvar um arquivo no projeto

### Build
Para executar uma build do site é necessário rodar o comando ```ng build --prod```, que resultará na pasta dist com os conteúdos do site compilados e minificados

### Deploy
Para fazer o deploy da aplicação no github pages é necessário apenas trocar o nome da pasta dist resultante do Build para docs e então fazer um push para a branch master do projeto