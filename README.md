# yizhangyichi-api

## convert table to sequelize-auto

- cmd `npm install -g mysql`
- [project repo](https://github.com/sequelize/sequelize-auto)
- cmd
  + `sequelize-auto -h localhost -p 3307 -d yizhangyichi -u yizhangyichi -x 'yizhangyichi' -e mysql -o models -C`

## Table naming convention

- Singular names for tables
- Singular names for columns
- Schema name for tables prefix (E.g.: SchemeName.TableName)
- Pascal casing (a.k.a. upper camel case)
- ID: TableNameID

## realese
- build image
    + `make build_image`
- push to gcr 
    + `make push_to_dokcer_hub`
- deploy
    + `make deploy`

## Miscs

- sample command to generate modal of db
  + `sequelize-auto -h localhost -p 3307 -d yizhangyichi -u dbuser -x 'dbpasswork' -e mysql -o models`
