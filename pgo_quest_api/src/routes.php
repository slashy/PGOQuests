<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/pokemon[/{ids}]', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $where = "1";
  if ($ids = $args['ids']) {
    $where = "pokemon_id IN ($ids)";
  }
  $query = "SELECT * 
            FROM pokemon
            WHERE $where";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/quest[/{quest_id}]', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $where = "1";
  if ($quest_id = $args['quest_id']) {
    $where = "quest_id = '$quest_id'";
  }
  $query = "SELECT * 
            FROM quest 
            WHERE $where";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/pokestop[/{stop_name}]', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $where = "1";
  if ($stop_name = $args['stop_name']) {
    $where = "pokestop_url like '%$stop_name%' OR pokestop_name like '%$stop_name%' OR pokestop_address like '%$stop_name%'";
  }
  $query = "SELECT pokestop_id, pokestop_name 
            FROM pokestop
            WHERE $where";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/pokestop_detail[/{stop_id}]', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $where = "1";
  if ($stop_id = $args['stop_id']) {
    $where = "pokestop_id = 'stop_id'";
  }
  $query = "SELECT * 
            FROM pokestop
            WHERE $where";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/reward', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $query = "SELECT * FROM reward";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/quest_type', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $query = "SELECT * FROM quest_type";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/quest_pokemon[/{quest_id}]', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $where = "1";
  if ($quest_id = $args['quest_id']) {
    $where = "quest_id = '$quest_id'";
  }
  $query = "SELECT * 
            FROM quest_has_pokemon
            WHERE $where";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/quest_reward[/{quest_id}]', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $where = "1";
  if ($quest_id = $args['quest_id']) {
    $where = "quest_id = '$quest_id'";
  }
  $query = "SELECT *
            FROM quest_has_reward 
            NATURAL JOIN reward
            WHERE $where";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});


// **

$app->get('/questlist', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $query = "SELECT p.*, q.*, qt.*, qr.*, r.*, pq.pokemon_id
            FROM pokestop_has_quest pq
            NATURAL JOIN reward r
            NATURAL JOIN quest q
            NATURAL JOIN quest_type qt 
            NATURAL JOIN pokestop p
            NATURAL JOIN quest_has_reward qr
            ";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});
