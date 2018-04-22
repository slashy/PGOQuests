<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/pokemon[/{ids}]', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  if ($ids = $args['ids']) {
    $query = "SELECT * FROM pokemon WHERE pokemon_id IN ($ids)";
  } else {
    $query = "SELECT * FROM pokemon";
  }
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/quests', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $query = "SELECT * FROM quest";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/pokestops[/{stop_name}]', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  if ($stop_name = $args['stop_name']) {
    $query = "SELECT * FROM pokestop WHERE pokestop_url like '%$stop_name%' OR pokestop_name like '%$stop_name%' OR pokestop_address like '%$stop_name%'";
  } else {
    $query = "SELECT * FROM pokestop";
  }
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/rewards', function (Request $request, Response $response, array $args) {
  $response = $response->withHeader('Content-type', 'application/json');
  $query = "SELECT * FROM reward";
  $sth = $this->db->prepare($query);
  $sth->execute();
  $result = $sth->fetchAll();
  $response->getBody()->write(json_encode($result));
  return $response;
});

$app->get('/quest_types', function (Request $request, Response $response, array $args) {
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
  if ($quest_id = $args['quest_id']) {
    $query = "SELECT * FROM quest_has_pokemon WHERE quest_id = '$quest_id'";
  } else {
    $query = "SELECT * FROM quest_has_pokemon";
  }
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
