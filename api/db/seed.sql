DROP TABLE IF EXISTS tele;

CREATE TABLE tele (
    id serial PRIMARY KEY,
    title VARCHAR (200) NOT NULL,
    user VARCHAR(200) NOT NULL,
    body VARCHAR NOT NULL,
)



