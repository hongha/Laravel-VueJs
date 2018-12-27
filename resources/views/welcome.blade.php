<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <title>Laravel</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" type="text/css" href="/css/app.css">
    </head>
    <body>
        <div id="app">
            <!-- <my-component></my-component> -->
            <!-- <list-rendering-component></list-rendering-component> -->
            <!-- <user-dashboard></user-dashboard> -->
            <!-- <life-cycle></life-cycle> -->
            <!-- <binding-html></binding-html> -->
            <!-- <form-binding></form-binding> -->
            <event-handling></event-handling>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>