/**
 * FrankenSpec
 * Bandwidth's Frankensteined API Spec
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NodeSdk);
  }
}(this, function(expect, NodeSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NodeSdk.PageInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PageInfo', function() {
    it('should create an instance of PageInfo', function() {
      // uncomment below and update the code to test PageInfo
      //var instane = new NodeSdk.PageInfo();
      //expect(instance).to.be.a(NodeSdk.PageInfo);
    });

    it('should have the property prevPage (base name: "prevPage")', function() {
      // uncomment below and update the code to test the property prevPage
      //var instance = new NodeSdk.PageInfo();
      //expect(instance).to.be();
    });

    it('should have the property nextPage (base name: "nextPage")', function() {
      // uncomment below and update the code to test the property nextPage
      //var instance = new NodeSdk.PageInfo();
      //expect(instance).to.be();
    });

    it('should have the property prevPageToken (base name: "prevPageToken")', function() {
      // uncomment below and update the code to test the property prevPageToken
      //var instance = new NodeSdk.PageInfo();
      //expect(instance).to.be();
    });

    it('should have the property nextPageToken (base name: "nextPageToken")', function() {
      // uncomment below and update the code to test the property nextPageToken
      //var instance = new NodeSdk.PageInfo();
      //expect(instance).to.be();
    });

  });

}));
