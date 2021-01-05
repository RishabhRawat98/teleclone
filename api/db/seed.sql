DROP TABLE IF EXISTS tele;

CREATE TABLE tele (
    id serial PRIMARY KEY,
    title VARCHAR (200) NOT NULL,
    user VARCHAR(200) NOT NULL,
    body VARCHAR NOT NULL,
    ts DATE DEFAULT NOW()::DATE,
);


INSERT INTO tele (title, user, body)
VALUES
    ("It's been a long day", "RO", "it's been a long long day??!!!!"),
    ("Let's GOO", "PAOLA", "LET'S WIN!!!!!!!!!!!!!!!!!!!!")


