# Teste EW

## Alterações ao Dataset

```
python3 dataset_fix.py
```

O dataset original encontrava-se no formato `csv`, como tal foi necessário realizar uma conversão para `json`, para tal utilizou-se um pequeno *script* em `python`.

A maior parte do atributos do *dataset* encontra-se no formato de *string*, contudo alguns foram alterados para *int* e *float* dada a maior conveniência no processamento de *queries*.

## Persistência de Dados

O `mongodb` foi a base de dados escolhida para armazenar as informações do *dataset*, além disso a importação dos dados é feita no momento em que se executa o `docker-compose`.

O comando que se encontra no `docker-compose` copia o *dataset* para dentro do *container*, e no momento de execução do `mongoimport`, define o nome da base de dados, coleção e método de importação, neste caso *json-array*.

Apesar dos registos do *dataset* já conterem um identificador, optou-se por manter o `_id` que o `mongodb` adiciona por defeito, contudo esse mesmo `_id` acabou por não ter qualquer uso.

## Criar Imagens

```
cd ex1
docker build . -t ex1-server
```
```
cd ex2
docker build . -t ex2-server
```

## Correr Aplicação
```
docker-compose up -d
```