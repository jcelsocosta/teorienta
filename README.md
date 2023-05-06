# teorienta
Projeto da disciplina de ESS da graduação em Ciência da Computação do CIn-UFPE

Objetivo: Ter maior agilidade na escrita dos projetos e transparência com o cliente sobre a elaboração e submissão dos mesmos.

Requisitos Funcionais:
- O cliente pode se cadastrar em vários editais.
- O gerente observa os editais em que há inscrições e a partir de então gera um documento para submissão.

Requisitos Não Funcionais:
- O servidor deve ser implementado em Node JS
- A GUI deve ser implementada em Angular
- O banco de dados deve ser implementado em MongoDB

Regras de negócios:
- Quando o cliente se cadastrar, deve ser enviada uma notificação para o gerente avisando que algum cliente se cadastrou em um dado edital
- O edital escolhido pelo cliente deve gerar um documento de texto com uma prévia do que poderá ser uma aplicação. Este documento deverá ser acessado, necessariamente, apenas pelo gerente.
- Ao cliente é exibida uma linha de tempo desde o momento em que ele se inscreve em um edital até o momento em que o edital está pronto para a submissão.
- Quando o edital estiver pronto para a submissão, o cliente receberá uma notificação pelo email e poderá acessar o documento pronto tanto pelo email quanto pela plataforma

Projeto desenvolvido em dupla com Adson Ramos

## Inicializando o projeto

Para executar o projeto seaport-service:

```bash
# execute o seguinte comando abaixo
docker-compose up -d

# caso precise recriar as imagens execute o comando abaixo
docker-compose up -d --build --force-recreate
```
Acesse localhost:4200
