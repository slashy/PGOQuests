DROP TABLE IF EXISTS pokestop_has_quest;

DROP TABLE IF EXISTS quest_has_pokemon;

DROP TABLE IF EXISTS quest_has_reward;

DROP TABLE IF EXISTS quest;

DROP TABLE IF EXISTS pokemon;

DROP TABLE IF EXISTS admin_user;

DROP TABLE IF EXISTS pokestop;

DROP TABLE IF EXISTS quest_type;

DROP TABLE IF EXISTS reward;

CREATE TABLE reward (
  reward_id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  reward_name TEXT  NOT NULL    ,
PRIMARY KEY(reward_id));



CREATE TABLE quest_type (
  quest_type_id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  quest_type_name TEXT  NOT NULL    ,
PRIMARY KEY(quest_type_id));



CREATE TABLE pokestop (
  pokestop_id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  pokestop_name TEXT  NULL  ,
  pokestop_url TEXT  NULL  ,
  pokestop_address TEXT  NULL  ,
  pokestop_lat DOUBLE PRECISION  NULL  ,
  pokestop_lng DOUBLE PRECISION  NULL    ,
PRIMARY KEY(pokestop_id))
ENGINE=InnoDB;



CREATE TABLE admin_user (
  user_id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  username INTEGER UNSIGNED  NOT NULL  ,
  pw_hash TEXT  NOT NULL  ,
  role VARCHAR(20)  NOT NULL    ,
PRIMARY KEY(user_id));



CREATE TABLE pokemon (
  pokemon_id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  pokemon_name TEXT  NOT NULL    ,
PRIMARY KEY(pokemon_id));



CREATE TABLE quest (
  quest_id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  quest_type_id INTEGER UNSIGNED  NOT NULL  ,
  quest_name TEXT  NOT NULL    ,
PRIMARY KEY(quest_id)  ,
INDEX quest_FK_quest_type(quest_type_id),
  FOREIGN KEY(quest_type_id)
    REFERENCES quest_type(quest_type_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);



CREATE TABLE quest_has_reward (
  quest_id INTEGER UNSIGNED  NOT NULL  ,
  reward_id INTEGER UNSIGNED  NOT NULL  ,
  reward_count INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(quest_id, reward_id)  ,
INDEX quest_has_reward_FK_quest(quest_id)  ,
INDEX quest_has_reward_FK_reward(reward_id),
  FOREIGN KEY(quest_id)
    REFERENCES quest(quest_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(reward_id)
    REFERENCES reward(reward_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);



CREATE TABLE quest_has_pokemon (
  quest_id INTEGER UNSIGNED  NOT NULL  ,
  pokemon_id INTEGER UNSIGNED  NOT NULL    ,
PRIMARY KEY(quest_id, pokemon_id)  ,
INDEX quest_has_pokemon_FK_quest(quest_id)  ,
INDEX quest_has_pokemon_FK_pokemon(pokemon_id),
  FOREIGN KEY(quest_id)
    REFERENCES quest(quest_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(pokemon_id)
    REFERENCES pokemon(pokemon_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);



CREATE TABLE pokestop_has_quest (
  pokestop_id INTEGER UNSIGNED  NOT NULL  ,
  quest_id INTEGER UNSIGNED  NOT NULL  ,
  reward_id INTEGER UNSIGNED  NOT NULL  ,
  pokemon_id INTEGER UNSIGNED  NULL  ,
  message_id INTEGER UNSIGNED  NULL  ,
  timestamp TIMESTAMP  NULL    ,
PRIMARY KEY(pokestop_id, quest_id)  ,
UNIQUE INDEX pokestop_has_quest_FK_pokestop(pokestop_id)  ,
INDEX pokestop_has_quest_FK_quest(quest_id)  ,
INDEX pokestop_has_quest_FK_reward(reward_id)  ,
INDEX pokestop_has_quest_FK_pokemon(pokemon_id),
  FOREIGN KEY(pokestop_id)
    REFERENCES pokestop(pokestop_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(quest_id)
    REFERENCES quest(quest_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(reward_id)
    REFERENCES reward(reward_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(pokemon_id)
    REFERENCES pokemon(pokemon_id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
ENGINE=InnoDB;



