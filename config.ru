#!/usr/bin/env rackup
# encoding: utf-8
require 'rack/contrib/try_static'

root = File.expand_path('../frontend', __FILE__)
use Rack::Static,
  urls:   [/./],
  root:   File.expand_path('../frontend', __FILE__),
  index: 'index.html'


run Rack::URLMap.new # "/api"=> API::Listing