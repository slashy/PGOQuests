<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);

$app->add(new \Tuupola\Middleware\JwtAuthentication([
  "path" => "/admin",
  "secret" => "supersecretkeyyoushouldnotcommittogithub"
]));
