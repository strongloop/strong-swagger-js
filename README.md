# Swagger JavaScript library

[![Build Status](https://api.travis-ci.org/strongloop/strong-swagger-js.png?branch=master)](https://travis-ci.org/strongloop/strong-swagger-js)

This repository contains a friendly fork
of [swagger-js](https://github.com/swagger-api/swagger-js) v2.0.x with
additional enhancements. Our goal is to eventually contribute these
improvements to the upstream repository.

The client is compatible with Swagger Spec versions 1.1 and 1.2, the Swagger
Spec version 2.0 is *not* supported by this module.

### Calling an API with Swagger + Node.js!

Install swagger-client:
```
npm install swagger-client
```

Then let Swagger do the work!
```js
var client = require("swagger-client")

var swagger = new client.SwaggerApi({
  url: 'http://petstore.swagger.wordnik.com/api/api-docs',
  success: function() {
    if(swagger.ready === true) {
      swagger.apis.pet.getPetById({petId:1});
    }
  }
});

```

That's it!  You'll get a JSON response with the default callback handler:

```json
{
  "id": 1,
  "category": {
    "id": 2,
    "name": "Cats"
  },
  "name": "Cat 1",
  "photoUrls": [
    "url1",
    "url2"
  ],
  "tags": [
    {
      "id": 1,
      "name": "tag1"
    },
    {
      "id": 2,
      "name": "tag2"
    }
  ],
  "status": "available"
}
```

Need to pass an API key?  Configure one as a querystring:

```js
client.authorizations.add("apiKey", new client.ApiKeyAuthorization("api_key","special-key","query"));
```

...or with a header:

```js
client.authorizations.add("apiKey", new client.ApiKeyAuthorization("api_key","special-key","header"));
```
####What if you need to call two APIs with the Swagger Client?
Add a Swagger Authorization when you create the api client.

```js
var client = require("swagger-client")
// Add the default authorization to the global client.
client.authorizations.add("apiKey", new client.ApiKeyAuthorization("api_key","special-key","header"));

var swagger = new client.SwaggerApi({
  url: 'http://petstore.swagger.wordnik.com/api/api-docs',
  success: function() {
    if(swagger.ready === true) {
      swagger.apis.pet.getPetById({petId:1});
    }
  },
  // Add an authorization for this specific swagger client
  authorizations: new client.SwaggerAuthorization(
                        "apiKey",
                        new client.ApiKeyAuthorization("api_key", "another-special-key", "header")
  )
});

```
This adds a global default authorization to the client and then adds a different authorization to the specific swagger
api client when it is created.  You are able to pass in any number of new authorization headers by creating your
SwaggerAuthorization and then using its add method to add new ApiKeyAuthorizations.

### Calling an API with Swagger + the browser!

Download `swagger.js` and `shred.bundle.js` into your lib folder

```html
<script src='lib/shred.bundle.js' type='text/javascript'></script>
<script src='lib/swagger.js' type='text/javascript'></script>
<script type="text/javascript">
  // initialize swagger, point to a resource listing
  window.swagger = new SwaggerApi({
    url: "http://petstore.swagger.wordnik.com/api/api-docs",
    success: function() {
      if(swagger.ready === true) {
        // upon connect, fetch a pet and set contents to element "mydata"
        swagger.apis.pet.getPetById({petId:1}, function(data) {
          document.getElementById("mydata").innerHTML = data.content.data;
        });
      }
    }
  });
</script>
```

### Need to send an object to your API via POST or PUT?
```js
var body = {
  id: 100,
  name: "dog"
};

swagger.apis.pet.addPet({body: JSON.stringify(body)});
```

### Sending XML in as a payload to your API?
```js
var body = "<Pet><id>2</id><name>monster</name></Pet>";

swagger.apis.pet.addPet({body: body},{requestContentType:"application/xml"});
```

### Need XML response?
```js
swagger.apis.pet.getPetById({petId:1},{responseContentType:"application/xml"});
```

### Custom request signing
You can easily write your own request signing code for Swagger.  For example:

```js
var CustomRequestSigner = function(name) {
  this.name = name;
};

CustomRequestSigner.prototype.apply = function(obj, authorizations) {
  var hashFunction = this._btoa;
  var hash = hashFunction(obj.url);

  obj.headers["signature"] = hash;
  return true;
};
```

In the above simple example, we're creating a new request signer that simply base 64 encodes the URL.  Of course you'd do something more sophisticated, but after encoding it, a header called `signature` is set before sending the request.

### How does it work?
The Swagger JavaScript client reads the Swagger api definition directly from the server.  As it does, it constructs a client based on the api definition, which means it is completely dynamic.  It even reads the api text descriptions (which are intended for humans!) and provides help if you need it:

```js
s.apis.pet.getPetById.help()
'* petId (required) - ID of pet that needs to be fetched'
```

The HTTP requests themselves are handled by the excellent [shred](https://github.com/automatthew/shred) library, which has a ton of features itself.  But it runs on both node and the browser.


Development
-----------

The original Swagger.js client was written in CoffeeScript
and was transpiled from develop_2.0 branch. This fork is maintaining the
transpiled files only.

Running the tests
```bash
npm test

# or
mocha test
```

License
-------

Copyright 2011-2014 Reverb Technolgies, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
[apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
