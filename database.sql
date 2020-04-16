CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Favorite images table
CREATE TABLE "image" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (360) NOT NULL,
    "category_id" INT REFERENCES "category"
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- Sample data for favorites
INSERT INTO "image" ("url", "category_id")
VALUES ('https://media1.giphy.com/media/HRsy1HOyJ19dK/giphy.gif?cid=ecf05e47ddb3264b9cfc5a84b4759f1c2ff5923eff2f1958&rid=giphy.gif','5'),
('https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy.gif?cid=ecf05e47a9902232c08bd252d634ae9a1f1ab649d710c67c&rid=giphy.gif','5'),
('https://media3.giphy.com/media/AuIvUrZpzBl04/giphy.gif?cid=ecf05e47d01a47db2d76b45408a1157463b951880da736ca&rid=giphy.gif','5'),
('https://media3.giphy.com/media/yTgxFpw4lKl3i/giphy.gif?cid=ecf05e479092de4d323a443ce32c14c44d2a769468e0a15d&rid=giphy.gif','3'),
('https://media.giphy.com/media/l0NwOkgTYRi30mT4Y/giphy.gif','3'),
('https://media3.giphy.com/media/QIPEV0HWAiXVm/giphy.gif?cid=ecf05e47a56724cfdfc1a59e6fd8b04ca664f516f095c635&rid=giphy.gif','4'),
('https://media2.giphy.com/media/ZqlvCTNHpqrio/giphy.gif?cid=ecf05e4721fc4c8ce899633ee92125b8cc973d120712206d&rid=giphy.gif','1');