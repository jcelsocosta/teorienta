Feature: Gerenciar Editais
As a:  Administrador responsável por captar editais de fomento
I want to: cadastrar, editar, atualizar e excluir os editais de fomento 
So that: Eu posso visualizar todos os editais que estão no cadastrado no sistema

Scenario: Cadastro de Editais Abertos
Given Eu estou na página "Cadastro de Editais"
And Eu estou logado como "Administrador" com o login "user” e a senha "inovacao.4" 
When Eu vejo os campos a serem preenchidos
And Eu preencho o campo "Nome do Edital" com "Samsung Inovação da Manufatura Digital"
And Eu preencho o campo "Prazo Final para Inscrições" com “27/10/2020”
And Eu preencho o campo "Fomento" com "R$ 200.000,00" 
Then Eu posso ver a uma mensagem de confirmação

