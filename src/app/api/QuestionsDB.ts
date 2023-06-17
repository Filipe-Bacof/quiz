import QuestionModel from '../../model/question'
import AnswerModel from '../../model/answer'

const questions: QuestionModel[] = [
  new QuestionModel(201, 'Qual é a função do comando "print" em Python?', [
    AnswerModel.wrong('Ler dados do teclado'),
    AnswerModel.wrong('Realizar operações matemáticas'),
    AnswerModel.wrong('Definir uma função'),
    AnswerModel.right('Imprimir informações na tela'),
  ]),
  new QuestionModel(
    202,
    'Qual é a extensão de arquivo utilizada para salvar programas Python?',
    [
      AnswerModel.wrong('.pyt'),
      AnswerModel.wrong('.pyth'),
      AnswerModel.wrong('.pt'),
      AnswerModel.right('.py'),
    ],
  ),
  new QuestionModel(203, 'O que significa a sigla "IDE" em Python?', [
    AnswerModel.wrong('Instituto de Desenvolvimento em Engenharia'),
    AnswerModel.wrong('Interface de Desenvolvimento Externa'),
    AnswerModel.wrong('Interface de Desenvolvimento em Python'),
    AnswerModel.right('Ambiente de Desenvolvimento Integrado'),
  ]),
  new QuestionModel(
    204,
    'Qual função é usada para ler uma linha de um arquivo em Python?',
    [
      AnswerModel.wrong('read()'),
      AnswerModel.wrong('readline()'),
      AnswerModel.wrong('readlines()'),
      AnswerModel.right('file()'),
    ],
  ),
  new QuestionModel(
    205,
    'Qual é o resultado da expressão 3 + 4 * 2 em Python?',
    [
      AnswerModel.wrong('14'),
      AnswerModel.wrong('11'),
      AnswerModel.wrong('10'),
      AnswerModel.right('17'),
    ],
  ),
  new QuestionModel(
    206,
    'Qual é o operador usado para calcular o resto da divisão em Python?',
    [
      AnswerModel.wrong('%'),
      AnswerModel.wrong('/'),
      AnswerModel.wrong('//'),
      AnswerModel.right('*'),
    ],
  ),
  new QuestionModel(
    207,
    'Qual é a função usada para obter o tamanho de uma lista em Python?',
    [
      AnswerModel.wrong('count()'),
      AnswerModel.wrong('len()'),
      AnswerModel.wrong('size()'),
      AnswerModel.right('length()'),
    ],
  ),
  new QuestionModel(
    208,
    'Qual é a função utilizada para pausar a execução de um programa em Python por um determinado número de segundos?',
    [
      AnswerModel.wrong('delay()'),
      AnswerModel.wrong('sleep()'),
      AnswerModel.wrong('wait()'),
      AnswerModel.right('pause()'),
    ],
  ),
  new QuestionModel(
    209,
    'Qual é a função utilizada para converter um valor para o tipo inteiro em Python?',
    [
      AnswerModel.wrong('str()'),
      AnswerModel.wrong('float()'),
      AnswerModel.wrong('int()'),
      AnswerModel.right('type()'),
    ],
  ),
  new QuestionModel(
    210,
    'Qual é a função usada para remover o último elemento de uma lista em Python?',
    [
      AnswerModel.wrong('pop()'),
      AnswerModel.wrong('remove()'),
      AnswerModel.wrong('delete()'),
      AnswerModel.right('clear()'),
    ],
  ),
  new QuestionModel(
    211,
    'Qual é a maneira correta de abrir um arquivo em Python para leitura?',
    [
      AnswerModel.wrong('open("arquivo.txt", "w")'),
      AnswerModel.wrong('open("arquivo.txt", "r")'),
      AnswerModel.wrong('open("arquivo.txt", "a")'),
      AnswerModel.right('open("arquivo.txt", "x")'),
    ],
  ),
  new QuestionModel(
    212,
    'Qual é o método utilizado para adicionar um elemento a uma lista em Python?',
    [
      AnswerModel.wrong('append()'),
      AnswerModel.wrong('extend()'),
      AnswerModel.wrong('insert()'),
      AnswerModel.right('add()'),
    ],
  ),
  new QuestionModel(
    213,
    'Qual é a função utilizada para arredondar um número em Python?',
    [
      AnswerModel.wrong('ceil()'),
      AnswerModel.wrong('round()'),
      AnswerModel.wrong('floor()'),
      AnswerModel.right('trunc()'),
    ],
  ),
  new QuestionModel(
    214,
    'Qual é a forma correta de definir uma função em Python?',
    [
      AnswerModel.wrong('function nome_da_funcao():'),
      AnswerModel.wrong('def nome_da_funcao():'),
      AnswerModel.wrong('define nome_da_funcao():'),
      AnswerModel.right('define_function nome_da_funcao():'),
    ],
  ),
  new QuestionModel(
    215,
    'Em Python, qual é a palavra-chave usada para definir uma classe?',
    [
      AnswerModel.wrong('struct'),
      AnswerModel.wrong('class'),
      AnswerModel.wrong('object'),
      AnswerModel.right('define'),
    ],
  ),
  new QuestionModel(
    216,
    'Qual é o método usado para converter uma string em letras minúsculas em Python?',
    [
      AnswerModel.wrong('tolower()'),
      AnswerModel.wrong('lower()'),
      AnswerModel.wrong('casefold()'),
      AnswerModel.right('convert()'),
    ],
  ),
]

export default questions
