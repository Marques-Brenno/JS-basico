# Projeto de Formulário de Cadastro

Este é um projeto simples de uma página de formulário de cadastro desenvolvida com `HTML`, `CSS` e `JavaScript`. A interface é limpa, responsiva e apresenta validações de campo em tempo real para uma melhor experiência do usuário.

## ✒️ Descrição

O projeto consiste em uma única página centrada com um formulário para registro de novos usuários. O formulário solicita nome, e-mail e senha. As validações são aplicadas dinamicamente à medida que o usuário preenche os campos, e o botão de "Cadastrar" só é habilitado quando todos os critérios são atendidos.

## ✨ Funcionalidades

* **Validação de Campos em Tempo Real:** O formulário verifica se os campos não estão vazios.
* **Verificação de Formato de E-mail:** Garante que o campo de e-mail contenha o caractere `@`.
* **Indicador de Força da Senha:**
    * Uma barra de progresso visual indica a força da senha digitada.
    * Um texto exibe a classificação da senha (de "Muito fraca" a "Extremamente Forte").
    * A força é calculada com base em critérios como comprimento, uso de letras maiúsculas e minúsculas, números e caracteres especiais.
* **Visualização de Senha:** Um ícone de "olho" permite ao usuário alternar a visibilidade da senha.
* **Botão de Cadastro Dinâmico:** O botão "Cadastrar" permanece desabilitado e com uma cor distinta até que todos os campos sejam preenchidos corretamente, prevenindo envios inválidos.
* **Design Moderno:** Utiliza CSS com variáveis, flexbox para alinhamento e efeitos de transição suaves nos inputs para uma aparência agradável.

## 🛠️ Tecnologias Utilizadas

* **`HTML5`:** Estrutura semântica do formulário.
* **`CSS3`:** Estilização, layout responsivo e animações.
    * **Variáveis CSS:** Para um tema de cores fácil de manter.
    * **Flexbox:** Para centralização e alinhamento dos elementos.
* **`JavaScript`:** Manipulação do DOM, lógica de validação e interatividade.
* **Boxicons:** Biblioteca de ícones utilizada para o botão de visualização de senha.

## 🚀 Como Usar

1.  Faça o clone ou o download deste repositório.
2.  Abra o arquivo `cadastro.html` em seu navegador de preferência.
3.  Preencha os campos do formulário para ver as validações em ação.

Não é necessária nenhuma instalação ou dependência adicional para executar este projeto.