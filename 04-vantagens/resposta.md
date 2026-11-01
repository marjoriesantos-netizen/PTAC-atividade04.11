# 4. Vantagens

## Três vantagens do SQL

1. **Integridade e transações ACID.** Bancos relacionais garantem atomicidade, consistência, isolamento e durabilidade, o que é importante em operações financeiras, estoque e cadastros que não podem ficar pela metade.

2. **Schema forte e validação no banco.** As tabelas, colunas, tipos, chaves primárias, chaves estrangeiras e restrições são definidos no banco. Isso reduz dados inconsistentes e facilita entender a estrutura do sistema.

3. **Consultas com JOIN e padronização.** O SQL é uma linguagem declarativa consolidada, com suporte a junções entre tabelas, agregações, índices e otimizador de consultas. É uma boa escolha quando os dados são muito relacionados e as consultas envolvem várias entidades.

## Três vantagens do MongoDB

1. **Schema flexível.** Documentos de uma mesma coleção podem ter campos diferentes. Isso facilita evoluir a aplicação, receber dados variados e trabalhar com formulários ou integrações que mudam com frequência.

2. **Escalabilidade horizontal.** O MongoDB possui sharding nativo, permitindo distribuir grandes volumes de dados entre vários servidores. Isso ajuda quando a aplicação precisa crescer em quantidade de dados e de acessos.

3. **Modelo natural para documentos e arrays.** Objetos aninhados e listas podem ser armazenados diretamente no documento, sem a necessidade de criar várias tabelas e JOINs para representar um pedido, um produto com tags ou um cadastro com endereço e contatos.

## Comparação rápida

| Critério | SQL | MongoDB |
|---|---|---|
| Estrutura | Tabelas, linhas e colunas fixas | Coleções e documentos flexíveis |
| Melhor uso | Dados muito relacionados e regras rígidas | Dados variados, aninhados e em grande volume |
| Identificador comum | `id` | `_id` |
