import * as angular from "angular";
import 'angular-route';
import { ProductController } from "../controllers/product.controller";
import { AuthController } from "../controllers/auth.controller";
import { ShoppingCartController } from "../controllers/shopingcart.controller";
import { AboutController } from "../controllers/about.controller";
import { termcontroller } from "../controllers/termcontroller";
import { privacycontroller } from "../controllers/privacy.controller";
import { contactcontroller } from "../controllers/contact.controller";
import { ProductService } from "../services/product.service";
var appModule = angular.module('ecommerce', ['ngRoute']);
appModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/auth', {
            templateUrl: 'views/login.html', // Template for the home route
            controller: 'AuthController', // Controller for the home route
            controllerAs: 'AuthCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .when('/signup', {
            templateUrl: 'views/signup.html', // Template for the home route
            controller: 'AuthController', // Controller for the home route
            controllerAs: 'AuthCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .when('/product', {
            templateUrl: 'views/catalogs.html', // Template for the about route
            controller: 'ProductController', // Controller for the about route
            controllerAs: 'ProductCtrl' // Use 'aboutCtrl' as alias for the controller instance
        })
            .when('/product/:productId', {
            templateUrl: 'views/details.html',
            controller: 'ProductController'
        })
            .when('/cart', {
            templateUrl: 'views/cart.html', // Template for the about route
            controller: 'ShoppingCartController', // Controller for the about route
            controllerAs: 'CartCtrl' // Use 'aboutCtrl' as alias for the controller instance
        })
            .when('/about', {
            templateUrl: 'views/About.html', // Template for the home route
            controller: 'AboutController', // Controller for the home route
            controllerAs: 'aboutCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .when('/terms', {
            templateUrl: 'views/term.html', // Template for the home route
            controller: 'termcontroller', // Controller for the home route
            controllerAs: 'termCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .when('/privacy', {
            templateUrl: 'views/privacy.html', // Template for the home route
            controller: 'privacycontroller', // Controller for the home route
            controllerAs: 'termCprivacyctrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .when('/contact', {
            templateUrl: 'views/contact.html', // Template for the home route
            controller: 'contactcontroller', // Controller for the home route
            controllerAs: 'contactctrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .otherwise({
            redirectTo: 'product' // Default route is home
        });
    }]);
appModule.controller('ProductController', ProductController).service("ProductService", ProductService);
appModule.controller('AuthController', AuthController);
appModule.controller('ShoppingCartController', ShoppingCartController);
appModule.controller('AboutController', AboutController);
appModule.controller('termcontroller', termcontroller);
appModule.controller('privacycontroller', privacycontroller);
appModule.controller('contactcontroller', contactcontroller);
