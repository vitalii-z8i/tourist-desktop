#!/usr/bin/env rackup
# encoding: utf-8
require 'rack/contrib/try_static'

use Rack::TryStatic,
  root: File.expand_path('../frontend', __FILE__),
  urls: %w[/], try: ['index.html']

run Rack::URLMap.new # "/api"=> API::Listing